

"use strict"
functionStripHyphenFromSSN(ssn); {
    let firstPart = ssn.substring(0,3);
    let secondPart = ssn.substring(4,6);
    let thirdPart = ssn.substring(7);

    let ssnDigitString = firstPart + secondPart + thirdPart;

    return ssnDigitString;
}
