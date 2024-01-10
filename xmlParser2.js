const fs = require('fs');
const xml2js = require('xml2js');

// Read the XML content from the file
const xmlContent = fs.readFileSync('formatted_file.xml', 'utf-8');

// Remove tabs from the XML content
const cleanedXml = xmlContent.replace(/\t/g, '');

// Parse the cleaned XML content
xml2js.parseString(cleanedXml, (err, result) => {
  if (err) {
    console.error(err);
    return;
  }

  // Convert the parsed XML back to a string with single-line formatting
  const formattedXml = formatXmlObject(result);

  // Write the formatted XML back to the file
  fs.writeFileSync('formatted_file_final.xml', formattedXml);
});

// Function to format an XML object into a single-line string
function formatXmlObject(obj) {
  const builder = new xml2js.Builder({
    renderOpts: { pretty: false },
  });
  let formattedXml = builder.buildObject(obj);

  return formattedXml;
}