#function to create a new to do item
def crete_to_do_object(description):
    return{
    "description":description,
    "id":id,
    "status":"pending"
    }
 
def print_description_and_id(item){
    print(f"Task ID:{id}, Description:{description}")\

}

def check_id_match(item, id_to_check_against):
    return item['id']==id_to_check_against

    #object representing the to do item
todo_item_example={
    "description":"Buy Shoes",
    "id":"task-14",
    "status":"pending"
}

#function to mark the task as complete

def mark_task_as_complete(item):
    item['status']="complete"

#function to mark a task as pending
def mark_task_as_pending(item):
    item["status"]="pending"

    #list of to do items
list_of_to_do_items=[
    {"description":"Brush my teeth", "id":"task-41", "status":"pending"},
    {"description":"Take a shower", "id":"task-42", "status":"pending"},
    {"description":"Wash Dishes", "id":"task-43", "status":"pending"}
]

#function to find my to do item by id

def find_to_do_by_id(to_do_list, id_to_find):
    for item in to_do_list:
        if item['id']==id_to_find:
            return item
        return None

#function to get all pending tasks
def get_pending_tasks(to_do_list):
    return[item for item in to_do_list if item['status']=="pending"]


def print_all_tasks(to_do_list):
    for item in to_do_list:
        print(f"Description: {item['decription']}, Status:"{item['status']})