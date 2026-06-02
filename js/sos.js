function triggerSOS(){

    const confirmSOS = confirm(
        "Are you sure you want to activate SOS?"
    );

    if(confirmSOS){

        document
            .getElementById("statusCard")
            .classList.remove("hidden");

        localStorage.setItem(
            "lastSOS",
            new Date().toLocaleString()
        );
    }
}