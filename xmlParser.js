const fs = require('fs');
const xml2js = require('xml2js');

// Read the XML content from the file
const xmlContent = fs.readFileSync('googleFeedSamplePickLine.xml', 'utf-8');

// Parse the XML content
xml2js.parseString(xmlContent, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
  
    // Convert the parsed XML back to a string with single-line formatting
    const formattedXml = formatXmlObject(result);
  
    // Write the formatted XML back to the file
    fs.writeFileSync('formatted_file.xml', formattedXml);
  });
  
  // Function to format an XML object into a single-line string
  function formatXmlObject(obj) {
    const builder = new xml2js.Builder({
      renderOpts: { pretty: false },
    });
    let formattedXml = builder.buildObject(obj);
  
    // Remove newline characters
    formattedXml = formattedXml.replace(/(\n|\r|&#xD;)/g, '');
  
    return formattedXml;
  }

