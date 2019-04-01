document.addEventListener('DOMContentLoaded', () => {

    /**
     * Function used to convert CSV to JSON
     * @param path: String => The URL of the CSV file
     * @return Promise => The data is resolved if function is correct
    */
        const parseCsv = path => {
            return new Promise( (resolve, reject) => {
                /* 
                Use D3.js to convert CSV in JSON
                You need to use the correct D3.js function https://bit.ly/2VbXkk7
                */
                    // Start coding here...
                //

                /* 
                TIPS) Since it's a Promise, the D3.js function is used has well has 
                the fetch function with .then() and .catch() methods.
                */
            });
        };
    //

    /**
     * Function used to fetch JSON
     * @param path: String => The URL of the JSON file
     * @return Promise => The data is resolved if function is correct
    */
        const parseJSon = path => {
            return new Promise( (resolve, reject) => {
                fetch(path).then( data => data.json() )
                .then( data => resolve(data) )
                .catch( error => reject(error) );
            });
        };
    //

    /**
     * Function used to parse all CSV files
     * @return Object => All parsed data in JSON
    */
        const parseAllCsv = () => {
            /* 
            Set timer
            */
                const timer = new Date();
                console.log(`%cStarted`, `color: red;`, `${timer.getHours()}h ${timer.getMinutes()}m ${timer.getSeconds()}s`);
            //

            /* 
            Return Promise
            */
                return new Promise( (resolve, reject) => {
                    // Use Promise.all() to chain Promise
                    Promise.all([
                        parseCsv('./dataset/net_salary_per_town_categories.csv'),
                        parseCsv('./dataset/base_etablissement_par_tranche_effectif.csv'),
                        parseCsv('./dataset/name_geographic_information.csv'),
                    ])
                    // The then callback function is async
                    .then( async dataArray => {
                        // Use await to stop execution
                        const ordinatedCities = await setCities(dataArray);
                        const ordinatedRegions = await setRegions(ordinatedCities);

                        // Return timer annd data
                        return resolve( { timer, ordinatedCities, ordinatedRegions });
                    })
                    .catch( error => reject(error) );
                });
            //
        };
    //

    /**
     * Function used to define cities list
     * @param data: Array<Array> => The result of parseAllCsv() function
     * @declaration combinatedData: Array<Object> => The array the function send back
     * @return combinatedData: Array<Object> => The array of all cities
    */
        const setCities = cityArray => {
            return new Promise( (resolve, reject) => {
                // Define array for ordinated data                    
                let combinatedData = [];
                            
                /**
                 * Loop on data[0]
                 * @definition data[0] => List of all cities with salary
                 * @definition data[1] => List of all companies by city
                */
               cityArray[0].forEach( item => {
                    // Use the d3.filter(...) to combine data[0] with data[1] https://bit.ly/2CP1HdN
                    let companies = undefined; // Start coding here...
                    let regions = undefined; // Start coding here...

                    // Combine data (don't edit this code)
                    Object.assign(item, companies[0]);
                    Object.assign(item, regions[0]);
                
                    // Add an object in the array with the correct property (cf. III.A.)
                    combinatedData.push(
                        // Start coding here...
                    )
                });

                // Return the ordinated data
                return resolve(combinatedData)
            })
        };
    //

    /**
     * Function used to define salaries by regions
     * @param data: Array<Cities> => The result of setCities() function
     * @declaration combinatedData: Array<Object> => The array the function send back
     * @return combinatedData: Array<Object> => The array of all cities
    */
        const setRegions = data => {
            return new Promise( (resolve, reject) => {
                /*
                Declarations
                It's recommended to not edit these declarations
                */
                    let regionsArray = [];
                //

                /**
                 * Loop on the array of cities
                 * @param item => One single citu
                 * @param gender => One gender for one age
                */
                data.map( item => {
                    /*
                    Define existing region
                    It's recommended to not edit these const
                    */
                        const existingRegion = regionsArray.find( region => region.name === item.region);
                    //

                    /*
                    Get all salary
                    You had to create an array of object to add up all the salaries for each region
                    */
                        // It's recommended to edit the condition
                        if(!existingRegion){
                            if( item.region && item.code){
                                /* 
                                The region not exist yet
                                Add an object in the array with the correct property (cf. III.B.)
                                */
                                regionsArray.push(
                                    // Start coding here...
                                );
                            };

                        } else{
                            /* 
                            The region aleready exist
                            Edit the existinng region to add up new salaries (cf. III.B.)
                            */
                                // Start coding here...
                            //
                        };
                    //
                });

                /* 
                Salary average
                Make a loop on "regionsArray" to define average for each salaries (cf. III.B.)
                */
                regionsArray.map( region => {
                    // Start coding here...
                });

                // Return the regions array data
                return resolve(regionsArray);
            });
        };
    //

    /**
     * Function used to set region ranking
     * @param data: Array<Region> => The array created at III.C.
     * @declaration bestRegions: Array<Object> => The array the function send back
     * @declaration parameterArray: Array<Object> => The configuration array for loops
     * @return bestRegions: Array<Object> => The array of best regions
    */
        const setRegionRanking = data => {
            /*
            Declarations
            It's recommended to not edit these declarations
            */
                // Define an array to save result
                let bestRegions = [];

                // Define an array for the loop
                const parameterArray = [
                    {
                        age: '18-25',
                        gender: [ 'women', 'men' ]
                    },
                    {
                        age: '26-50',
                        gender: [ 'women', 'men' ]
                    },
                    {
                        age: '>50',
                        gender: [ 'women', 'men' ]
                    }
                ];
            //

            /**
             * Loop on the parameter array (map age & forEach gender)
             * @param item => One single age
             * @param gender => One gender for one age
            */
                // Loop on age
                parameterArray.map( item => {
                    // Loop on gender
                    item.gender.forEach( gender => {
                        // Use the d3.max(...) https://bit.ly/2CP1HdN
                        let maxSalary = undefined; // Start coding here...

                        // Use the d3.filter(...) https://bit.ly/2VdnqmY
                        let selectedRegion = undefined; // Start coding here...

                        // Add an object in the array with the correct property (cf. III.C.)
                        bestRegions.push(
                            // Start coding here...
                        );

                        /* 
                        TIPS) Considering this object: let user = { skill: { level: 10 } }
                        There is two ways to select a property:
                            - console.log( user.skill.level )
                            - console.log( user['skill']['level'] )
                        */
                    });
                });
            //

            /* 
            Use the function to display data in the DOM
            */
                displayBestRegionsArray(bestRegions);
            //
        }
    //
    
    

    /* 
    Start program
    At the beginning you need to use the parseAllCsv() function but when you got the JSON
    you had to use parseJSon() function instead
    */
        let type = 'JSON'; // 'CSV' || 'JSON'
        
        if( type === 'CSV' ){
            /* 
            Parse the CSV files to combine data
            */
                parseAllCsv()
                .then( result => {            
                    // Display JSON result in the console
                    displayJson(result.ordinatedCities, 'ordinatedCities');
                    displayJson(result.ordinatedRegions, 'ordinatedRegions');

                    // Display timer
                    console.log(`%cFinished`, `color: red;`, `${ (new Date() - result.timer)/1000 } seconds`);

                })
                .catch( error => console.error(error) );
            //
        }
        else if( type === 'JSON' ){
            /* 
            Set timer
            */
                const timer = new Date();
                console.log(`%cStarted`, `color: red;`, `${timer.getHours()}h ${timer.getMinutes()}m ${timer.getSeconds()}s`);
            //

            /* 
            Parse your JSON file to display data
            */
                parseJSon('./json/regions.json')
                .then( data => {
                    displayRegionsArray(data);
                    setRegionRanking(data);

                    // Display main
                    document.querySelector('main').style.display = 'block';

                    // Display timer
                    console.log(`%cFinished`, `color: red;`, `${ (new Date() - timer)/1000 } seconds`);
                });
            //
        }; 
    //
})