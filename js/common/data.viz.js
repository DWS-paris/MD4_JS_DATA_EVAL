/**
  * Function used to display regions array
  * @param data: Array<Region> => The combinated region array (cf. III.B.)
  * @return DOM elem. => Add one <tr> for each region in "#regionTable"
*/
    const displayRegionsArray = data => {
        // Sort array by city: bigger to smaller
        data.sort( (first, second) => second.salary['26-50'].men - first.salary['26-50'].men );

        // Iterate on arry to add HTML tag in the DOM
        data.map( item => {
            document.querySelector('#regionTable').innerHTML += `
                <tr>
                    <td><b>${item.name}</b> <span>INSEE ${item.code}</span></td>
                    <td>${item.cities}</td>
                    <td>${item.companies}</td>
                    <td>${item.salary['18-25'].women}</td>
                    <td>${item.salary['18-25'].men}</td>
                    <td>${item.salary['26-50'].women}</td>
                    <td>${item.salary['26-50'].men}</td>
                    <td>${item.salary['>50'].women}</td>
                    <td>${item.salary['>50'].men}</td>
                </tr>
            `;

            // Display #regionTable
            document.querySelector('#regionTable').style.display = 'table';
        });
    };
//

/**
  * Function used to display best regions array
  * @param data: Array<Region> => The combinated region array (cf. III.C.)
  * @return DOM elem. => Add one <tr> for each region in "#bestRegionTable"
*/
    const displayBestRegionsArray = data => {
        // Iterate on array to add HTML tag in the DOM
        data.map( item => {
            document.querySelector('#bestRegionTable').innerHTML += `
                <tr>
                    <td>${ item.gender === 'women' ? '<i class="fas fa-female"></i> ' + item.age : '<i class="fas fa-male"></i> ' + item.age }</td>
                    <td>${item.region}</td>
                    <td><b>${item.salary}</b></td>
                </tr>
            `;

            // Display #bestRegionTable
            document.querySelector('#bestRegionTable').style.display = 'table';
        });
    };
//

/**
  * Function to display JSON in console
  * @param data: Array<Object> => Every JSON array
  * @return :String => Send the JSON array in the console
*/
    const displayJson = (data, type = undefined) => {
        console.log(`%c Your data in JSON ${type}`, `color: green;`);
        console.log( JSON.stringify(data) );
    };
//