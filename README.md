# D3-challenge

For this challenge, a set of census data was used to create a scatter plot with D3JS and was rendered onto an HTML page.

First step was to set the margins to a reasonable scale considering the max of the dataset chosen, income vs. obesity. The chart results clearly show that an increase in wealth correlates with a decrease in obesity as the states get progressively less obese as you move up the x axis (income).

First margins were set with ample room to show the entire chart and all the elements.

An svg was appended to the scatter ID on the index.html file.  This was then passed through to the margin area with transform and translate properties.

Next data was read into the app.js file and given the variable censusData.  The data was mapped to return income statistics and obesity statistics by state.

The axes were created as x and y and then transformed and translated into the SVG area.  xrange and yrange variables were used to set the axes limits to the extents of the data set.

Dots were appenDed to the chart to represent the correlation of obsity vs income in each state, then text was appended to the dots to label each state's dot with the state abbreviation.

Lastly, chart titles were added to the x and y axes set positionally in between the y and x axes and the surrounding margins.