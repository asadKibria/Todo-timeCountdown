/**
 * Alert function
 */

const setAlert = (smg, type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${smg} <button data-bs-dismiss="alert" class=" btn-close"></button> </p>`;
}


/**
 * read LS data
 */ 
 
const readLSData = (key) => {
    //check key exists or not
    if ( localStorage.getItem(key)) {
        return data = JSON.parse(localStorage.getItem(key));
    } else {
        return false;
    }
    
}

/**
 * Set value LS
 */
const creatLSData = (key, value) => {

    //init value
    let data = [];

    //check key exists or not
    if ( localStorage.getItem(key) ) {
        data = JSON.parse(localStorage.getItem(key));
    }

    // now push data in LS
    data.push(value);

    //set data 
    localStorage.setItem(key, JSON.stringify(data));
}


/**
 * Update LS data
 */
const updateLSData = (key, array) => {

    localStorage.setItem(key, JSON.stringify(array));
}



/**
 * time countdown
 */

const timeCountdown = ( last_time ) => {
    
         // get Time 
        //  let start_time = Date.now();
        //  let end_time = new Date(date + ' ' + time);
         let order_time = Math.floor(Math.abs(last_time - Date.now()));
 
         // consbert time
         let total_sec = Math.floor((order_time / 1000 ));
         let total_min = Math.floor((total_sec / 60 ));
         let total_hour = Math.floor((total_min / 60 ));
         let total_day = Math.floor((total_hour / 24 ));
 
         // time 
 
         let hour = total_hour - (total_day * 24 );
         let min = total_min - (total_day * 24 * 60) - (hour * 60);
         let sec = total_sec - (total_day * 24 * 60 * 60 ) - (hour * 60 * 60) - (min * 60 );
 
         if (total_sec <= 0) {
             clearInterval(interval)
         }
 
         // set counting value 
         if(last_time < Date.now()){
            return `<strong style="color: red;">Time Over</strong>`;
        }else{
            return `${total_day} Days : ${hour} Hour : ${min} Min : ${sec} Sec`;
    
        }

}

// progress bar
const progressBar = (start_time, todo_time) => {
    let time_diff = todo_time - start_time;
    let time_change = todo_time - Date.now();

    const perWidth = Math.floor((100 * time_change) / time_diff);

    let width = '';

    if(perWidth >=1 && perWidth <=30){
        width = `width:${perWidth}%; background-color:pink;`;
    }else if(perWidth >=31 && perWidth <=40){
        width = `width:${perWidth}%; background-color:orange;`;
    }else if(perWidth >=41 && perWidth <=70){
        width = `width:${perWidth}%; background-color:green;`;
    }else if(perWidth >=71 && perWidth <=100){
        width = `width:${perWidth}%; background-color:blue;`;
    }else{
        width = `width:100%; background-color:red;`;
    }
    return width;
    
}
