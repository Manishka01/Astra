let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

displayContacts();

function addContact() {

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const relation = document.getElementById("relation").value;

    if(name === "" || phone === "" || relation === ""){
        alert("Please fill all fields");
        return;
    }

    const contact = {
        name,
        phone,
        relation
    };

    contacts.push(contact);

    localStorage.setItem(
        "contacts",
        JSON.stringify(contacts)
    );

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("relation").value = "";

    displayContacts();
}

function displayContacts(){

    const container =
        document.getElementById("contactsContainer");

    container.innerHTML = "";

    contacts.forEach((contact,index)=>{

        container.innerHTML += `
            <div class="contact-card">
                <h3>${contact.name}</h3>
                <p>📞 ${contact.phone}</p>
                <p>👤 ${contact.relation}</p>

                <button
                    class="delete-btn"
                    onclick="deleteContact(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}

function deleteContact(index){

    contacts.splice(index,1);

    localStorage.setItem(
        "contacts",
        JSON.stringify(contacts)
    );

    displayContacts();
}