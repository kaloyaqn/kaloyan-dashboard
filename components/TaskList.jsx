import React from 'react'

const TaskList = () => {

    const handleCreate = async (data) => {
        try {
            const response = await fetch("/api/clients/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    taskName: data.taskName
                }),
            }); 

            if (response.ok) {
                console.log("suzdaden e")
            } else {
                throw new Error(`Something went wrong! Status Code ${response.status}`);
            }
        } catch (e) {
            console.error("Error creating project:", error);
        }
    }

  return (
    <div>
        <form
        >
            <input></input>
        </form>
    </div>
  )
}

export default TaskList