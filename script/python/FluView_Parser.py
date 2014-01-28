## FluView Parser function
## Version 1.0020
## Developed by Duncan RenfrowSymon and Michael Simon
## Arcadia Healthcare Solutions
## 09/05/2013

# Import XML and CSV functionality for read and write formatting, respectively
import xml.etree.ElementTree as ET
import csv
import time

# BUGBUG Files are currently hardcoded 
infiles = ['DataPaloozaOutput_Outbreak_1_of_2.txt', 'DataPaloozaOutput_Outbreak_2_of_2.txt']
outfile = 'FluView_Extract.csv'
errfile = 'errorfile'

## DrugSearchList
# This is a list of drug description parameters that we will be searching
# for. This can be hard-coded here, but it could also be stored in a 
# separate file. Also, we may want separate lists for drug descriptions
# to search and NDC's to search
DrugDescSearchList = ['TAMIFLU','RELENZA']
DrugNDCSearchList = ['00040800','00040801','00040802','00040820','00040822','01730681','42254001','42254092','52125307','548684377','548684476','548686083','548686315','550452759','550453198','682583030'
]

def get_element_text(t):
	s = t.getchildren()
	if len(s) > 0:
		return(get_element_text(s[0]))
	else:
		return(t.text)
			
## This section prints the tree layout for initial testing and debug
## Functionality no longer necessary and can be removed
# f = open(filename,'r')
# l = f.readline()
# f.close()

# root = ET.fromstring(l)

# def print_tree(t,w=0):
	# print((' '*w) + t.tag[t.tag.index('}')+1:])
	# for s in t:
		# print_tree(s,w+3)

# def print_tree_header(t,p='.'):
	# print(p + '/' + t.tag[t.tag.index('}')+1:])
	# for s in t:
		# print_tree_header(s,p+'/'+t.tag[t.tag.index('}')+1:])

# print_tree_header(root)

## Open output files
# Here we open the CSV file and prepare the CSV Writer, and we open an error file
# for general error reporting on the records
f_out = open(outfile, 'w', newline = '')
csv_writer = csv.writer(f_out, delimiter = ',', quoting=csv.QUOTE_ALL)
csv_writer.writerow(['Rx Date', 'Patient Zip', 'Drug Description', 'Drug Product Code'])
e = open(errfile,'w')

# Record Counter for debug purposes
n=0

## Iterate through input files for relevent records
for filename in infiles:

	# Open file and iterate through records
	f = open(filename,'r')
	
	# Extract one record - NOTE: Current design parameters indicate that each 
	# record is a separate XML document root. Therefore, each must be parsed separately.
	for record in f:
	
		# Explicit cutoff at EOF
		if record == '':
			break
			
		# Increment record counter
		n=n+1
		
		# Extraction block - Failures reported to error file for further analysis
		try:
			
			# Use XML ElementTree Extractor to read line-by-line
			root = ET.fromstring(record.replace('&','&amp;'))
			
			# Extract values of interest. They are enclosed in try-except statements to retain
			# as many records as possible. Default values should be assigned in case the value
			# does not exist or cannot be retrieved. Also, for any value you that will be tested
			# later, a None value should be replaced as well.
			
			try:
				ZipCode = root.findall('./*/*/{http://www.surescripts.com/messaging}Patient/{http://www.surescripts.com/messaging}Address/{http://www.surescripts.com/messaging}ZipCode')[0].text
			except:
				ZipCode = 'XXXXX'
				
			try:
				DrugDesc = root.findall('.//{http://www.surescripts.com/messaging}DrugDescription')[0].text
				if DrugDesc==None:
					DrugDesc = ''
			except:
				DrugDesc = ''
			
			try:
				DrugNDC = root.findall('.//{http://www.surescripts.com/messaging}ProductCode')[0].text
				if DrugNDC==None:
					DrugNDC = 'XXXXXXXXXXX'
			except:
				DrugNDC = 'XXXXXXXXXXX'
				
			try:
				DateElement = root.findall('.//{http://www.surescripts.com/messaging}WrittenDate')[0]
				RawDate = get_element_text(DateElement)
				WrittenDate = RawDate.replace('-','')[0:8]
#				WrittenDate = time.strftime('%m/%d/%Y',time.strptime(RawDate, '%Y%m%d'))
			except:
				try:
					WrittenDate = DateElement.text
				except:
					WrittenDate = 'XXXXXXXXXX'

			# Search for substrings in the Drug Description or Product Code. If one is found, print
			# the result to the console, and output the result to the CSV file.
			if any(substring in DrugDesc.upper() for substring in DrugDescSearchList) or any(substring in DrugNDC for substring in DrugNDCSearchList):
				print(WrittenDate + ': ' + DrugNDC + ' (' + DrugDesc + ') Zip Code: ' + ZipCode)
				csv_writer.writerow([WrittenDate, ZipCode, DrugDesc, DrugNDC])
								
		# In the event of an exception, simply output the error message along with 
		# the entire record to the error file for later examinataion. Ultimately, 
		# this should be misformed records, but there may be salvageable data here
		# that could be extracted in future iterations.
		except Exception as inst:
			print(inst, file=e)
			print('Error on record ' + str(n)+': '+record+'\n', file=e)
			
	# Close the input file and iterate to the next input file.
	f.close()

# Close the CSV and errorfiles 
# BUGBUG - Really need to enclose the whole program in a try-catch that 
# causes these files to be closed even when the program fails.
e.close()
f_out.close()
