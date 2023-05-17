// Array of links with name, URL, and logo
const links = [
    {
        "label": "Car Gurú CRM",
        "url": "https://example.com",
        "logo": "https://i.ibb.co/DL5dC0X/cg-logo.png"
    },
    {
        "label": "Cotizador Hey Banco",
        "url": "https://creditoauto.hey.inc/index.cfm?cid=552OH2",
        "logo": "https://play-lh.googleusercontent.com/DSfP4gWwBe2VAM0-bblJJQtUTT8gUGdEqo_FJdZbp6dxSqSsQ4gOlTy0iyAJ0wCfseI"
    },
    {
        "label": "Whatsapp express",
        "url": "https://whatsappexpress.netlify.app/",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
    },
    {
        "label": "Motorpasión",
        "url": "https://www.motorpasion.com.mx/",
        "logo": "https://pbs.twimg.com/profile_images/1628711764924792832/Dv_xWhAM_400x400.png"
    },
    {
        "label": "Facebook messenger",
        "url": "https://www.facebook.com/messages",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1200px-Facebook_Messenger_logo_2020.svg.png"
    },
    {
        "label": "Autocosmos",
        "url": "https://www.autocosmos.com.mx/catalogo",
        "logo": "https://vanguardia.com.mx/binrepository/251x250/1c0/250d250/none/11604/WRKV/autocosmos1_1-34594_20210716122309.png"
    },
    {
        "label": "Facebook Marketplace",
        "url": "https://www.facebook.com/marketplace",
        "logo": "https://seeklogo.com/images/M/marketplace-facebook-logo-BC79D3F4C3-seeklogo.com.png"
    },
    
];


// Function to generate the link elements dynamically
function generateLinks() {
    const linksContainer = document.getElementById("links-container");

    links.forEach((link) => {
        const linkDiv = document.createElement("div");
        linkDiv.classList.add("col-6","col-sm-4", "col-md-3", "col-lg-2", "p-4");
        
        const linkAnchor = document.createElement("a");
        linkAnchor.href = link.url;
        
        const linkImage = document.createElement("img");
        linkImage.src = link.logo;
        linkImage.alt = link.label;
        linkImage.classList.add("logo", "animate__animated", "animate__fadeIn");
        
        linkAnchor.appendChild(linkImage);
        linkDiv.appendChild(linkAnchor);
        linksContainer.appendChild(linkDiv);
    });
}

// Call the function to generate the links
generateLinks();
