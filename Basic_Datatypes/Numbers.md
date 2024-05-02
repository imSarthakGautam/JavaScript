**-- To write numbers with many zeroes:

Append "e" with the zeroes count to the number. 
123e6 = 123000000. (six zeros)

A negative number after "e" causes the number to be divided by 1 with given zeroes. 
E.g. 123e-6 means 0.000123 (123 millionths).



**-- For different numeral systems:

Can write numbers directly in 
hex (0x), 
octal (0o) and 
binary (0b) systems.

parseInt(str, base) parses the string str into an integer in numeral system with given base, 2 ≤ base ≤ 36.
num.toString(base) converts a number to a string in the numeral system with the given base.



**-- For regular number tests:

isNaN(value) converts its argument to a number and then tests it for being NaN i.e no error
Number.isNaN(value) checks whether its argument belongs to the number type, and if so, tests it for being NaN

isFinite(value) converts its argument to a number and then tests it for not being NaN/Infinity/-Infinity
Number.isFinite(value) checks whether its argument belongs to the number type, and if so, tests it for not being NaN/Infinity/-Infinity



**-- For converting values like 12pt and 100px to a number:
(values : 12 , 100 )

Use parseInt/parseFloat for the “soft” conversion, which reads a number from a string and then returns the value they could read before the error.



**-- For fractions:

Round using Math.floor, Math.ceil, Math.trunc, Math.round or num.toFixed(precision).

Make sure to remember there’s a loss of precision when working with fractions.