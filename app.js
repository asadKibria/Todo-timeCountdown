const todo_data = document.getElementById('todo_data')
const todo_list = document.querySelector('.todo_list')
const msg = document.querySelector('.msg');

// console.log(todo_list)



// submit form data 
todo_data.onsubmit = (e) => {
    e.preventDefault();

    // get form data 
    const form_data = new FormData(e.target);
    // const data = Object.fromEntries(form_data.entries())
    const {date, time, task} = Object.fromEntries(form_data.entries())


    let start_time = Date.now();
    const end_time = new Date(date + " " + time);
    const last_time = end_time.getTime();

    // form validetion 
    if (!date || !time || !task) {
        msg.innerHTML = setAlert('All fields are required');
    } else {
        // rendom id 
        const id = Math.floor(Math.random() * 10000  ) + "_" + last_time;
        
        let form_data = {task, id, start_time, end_time, last_time};

        // set LS data val 
        creatLSData("todo", form_data);
        e.target.reset();
        allData();
    }

} 

// get all data 
const allData = () => {
    // get LS data 
    const lsData = readLSData("todo");

    let list = ""

    if ( !lsData || lsData.length == 0 ) {
       list += `<img src="./empty.webp" class="w-100" alt="">`
    }

    if ( lsData && lsData.length > 0 ) {

        lsData.reverse().map((item, index) => {

            list += `
            <div class="content_aria">
            <span>Task:${item.task} </span>
            <span>Last Time: ${timeCountdown(item.last_time)} </span>
            <button class="btn" type="button" onclick="deleteTack(${item.id})"><i class="bi bi-x"></i></button>
            </div>
            <div class="progressBar" style="${progressBar(item.start_time, item.last_time)}"></div>  
            `;
        })
    }
    todo_list.innerHTML = list;

}

// set interval 
setInterval(() => {
    allData()
}, 1000);


// delete Task
const deleteTack = (e) => {
    const id = e;
    // get LS data
    let allData = readLSData("todo");

    // get data id
    const index = allData.findIndex((data) => data.id == id);
    // remove id
    allData.splice(index, 1);
    // update LS data
    updateLSData("todo", allData);
    allData()

  };

