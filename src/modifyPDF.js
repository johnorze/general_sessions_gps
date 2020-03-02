import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

export async function modifyPDF(data)
{

    const url = 'https://www.tnjustice.org/wp-content/uploads/2020/02/PIA.pdf'
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const secondPage = pages[1]
    // const { width, height } = firstPage.getSize()

    console.log(data.court)
    
    // PAGE ONE
    // Insert court - pg 1
    switch(data.court) { 
        case "1":
            firstPage.drawText("General Sessions", {
                x: 200,
                y: 735,
                size: 12,
                font: helveticaFont,
                color: rgb(0,0,0),
            })
            break
        case "2":
            firstPage.drawText("Juvenile & Family", {
                x: 200,
                y: 735,
                size: 12,
                font: helveticaFont,
                color: rgb(0,0,0),
            })
            break
        case "3":
            firstPage.drawText("Chancery", {
                x: 200,
                y: 735,
                size: 12,
                font: helveticaFont,
                color: rgb(0,0,0),
            })
            break
        case "4":
            firstPage.drawText("Criminal", {
                x: 200,
                y: 735,
                size: 12,
                font: helveticaFont,
                color: rgb(0,0,0),
            })
            break
        default:
            firstPage.drawText("General Sessions", {
                x: 200,
                y: 735,
                size: 12,
                font: helveticaFont,
                color: rgb(0,0,0),
            })
            break
        
        }

        // insert county using helper function
        firstPage.drawText(findCounty(data.county), {
            x: 350,
            y: 735,
            size: 12,
            font: helveticaFont,
            color: rgb(0,0,0),            
        })
        
        // insert file number
        firstPage.drawText(data.fileNumber, {
            x: 405,
            y: 715,
            size: 12,
            font: helveticaFont,
            color: rgb(0,0,0),
        })
        
        // insert division
        if (typeof(data.division) === "string") {
            firstPage.drawText(data.division, {
                x: 405,
                y: 680,
                size: 12,
                font: helveticaFont,
                color: rgb(0,0,0),
             })
        }
        
        // insert plaintiff name
        firstPage.drawText(data.plaintiffName, {
            x: 150,
            y: 638,
            size: 12,
            font: helveticaFont,
            color: rgb(0,0,0),
        })

        // insert defendant name
        firstPage.drawText(data.defendantName, {
            x: 150,
            y: 602,
            size: 12,
            font: helveticaFont,
            color: rgb(0,0,0),
        })

        if (data.filedBefore == "2") {
            firstPage.drawText("X", {
                x: 296,
                y: 553,
                size: 12,
                font: helveticaFont,
                color: rgb(0,0,0),
            }) 
        }
        else if (data.filedBefore == "1") {
            firstPage.drawText("X", {
                x: 445,
                y: 553,
                size: 12,
                font: helveticaFont,
                color: rgb(0,0,0),
            }) 
        }
        
        // insert auto value
        if (typeof(data.autoValue) === "string") {
            firstPage.drawText(data.autoValue, {
                x: 465,
                y: 81,
                size: 12,
                font: helveticaFont,
                color: rgb(0,0,0),
            }) 
        } 

        // PAGE TWO
        for (let i = 1; i<12; i++) {
            for (let j = 1; j<16; j++) {
                secondPage.drawText("X", {
                    x: i*50,
                    y: j*50,
                    size: 12,
                    font: helveticaFont,
                    color: rgb(0,0,0),
                }) 
            }
        }
    

    const pdfBytes = await pdfDoc.save()
    var blob = new Blob([pdfBytes], {type: 'application/pdf'});
    var pdfURL = window.URL.createObjectURL(blob);

    var tempLink = document.createElement('a');
    tempLink.href = pdfURL;
    tempLink.setAttribute('download', 'filename.pdf');
    tempLink.click();

}

function findCounty(county)
{
    switch(county) {
        case "1": return "Anderson"      
        case "2": return "Bedford"
        case "3": return "Benton"
        case "4": return "Bledsoe"
        case "5": return "Blount"
        case "6": return "Bradley"
        case "7": return "Campbell"
        case "8": return "Cannon"
        case "9": return "Carroll"
        case "10": return "Carter"
        case "11": return "Cheatham"
        case "12": return "Chester"
        case "13": return "Claiborne"
        case "14": return "Clay"
        case "15": return "Cocke"
        case "16": return "Coffee"
        case "17": return "Crockett"
        case "18": return "Cumberland"
        case "19": return "Davidson"
        case "20": return "Decatur"
        case "21": return "DeKalb"
        case "22": return "Dickson"
        case "23": return "Dyer"
        case "24": return "Fayette"
        case "25": return "Fentress"
        case "26": return "Franklin"
        case "27": return "Gibson"
        case "28": return "Giles"
        case "29": return "Grainger"
        case "30": return "Greene"
        case "31": return "Grundy"
        case "32": return "Hamblen"
        case "33": return "Hamilton"
        case "34": return "Hancock"
        case "35": return "Hardeman"
        case "36": return "Hardin"
        case "37": return "Hawkins"
        case "38": return "Haywood"
        case "39": return "Henderson"
        case "40": return "Henry"
        case "41": return "Hickman"
        case "42": return "Houston"
        case "43": return "Humphreys"
        case "44": return "Jackson"
        case "45": return "Jefferson"
        case "46": return "Johnson"
        case "47": return "Knox"
        case "48": return "Lake"
        case "49": return "Lauderdale"
        case "50": return "Lawrence"
        case "51": return "Lewis"
        case "52": return "Lincoln"
        case "53": return "Loudon"
        case "54": return "Macon"
        case "55": return "Madison"
        case "56": return "Marion"
        case "57": return "Marshall"
        case "58": return "Maury"
        case "59": return "McMinn"
        case "60": return "McNairy"
        case "61": return "Meigs"
        case "62": return "Monroe"
        case "63": return "Montgomery"
        case "64": return "Moore"
        case "65": return "Morgan"
        case "66": return "Obion"
        case "67": return "Overton"
        case "68": return "Perry"
        case "69": return "Pickett"
        case "70": return "Polk"
        case "71": return "Putnam"
        case "72": return "Rhea"
        case "73": return "Roane"
        case "74": return "Robertson"
        case "75": return "Rutherford"
        case "76": return "Scott"
        case "77": return "Sequatchie"
        case "78": return "Sevier"
        case "79": return "Shelby"
        case "80": return "Smith"
        case "81": return "Stewart"
        case "82": return "Sullivan"
        case "83": return "Sumner"
        case "84": return "Tipton"
        case "85": return "Trousdale"
        case "86": return "Unicoi"
        case "87": return "Union"
        case "88": return "Van Buren"
        case "89": return "Warren"
        case "90": return "Washington"
        case "91": return "Wayne"
        case "92": return "Weakley"
        case "93": return "White"
        case "94": return "Williamson"
        case "95": return "Wilson"
        default: return

    }

}