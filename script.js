let allProperties = [
    { id: 1, name: "3 Bedroom Flat", location: "Ajah, Lagos", type: "flat", status: "sale", price: 15000000, beds: 3, baths: 2, size: "180 sqm", img: "images/house_1.jpg" },
    { id: 2, name: "Luxury Duplex", location: "GRA, Rivers", type: "duplex", status: "sale", price: 45000000, beds: 5, baths: 4, size: "350 sqm", img: "images/house_2.jpg" },
    { id: 3, name: "2 Bedroom Apartment", location: "Sangotedo, Lagos", type: "flat", status: "sale", price: 8500000, beds: 2, baths: 2, size: "120 sqm", img: "images/house_3.jpg" },

    { id: 4, name: "4 Bedroom Terrace", location: "Trans Amadi, Rivers", type: "terrace", status: "sale", price: 38000000, beds: 4, baths: 3, size: "260 sqm", img: "images/house_4.png" },
    { id: 5, name: "Serviced Land", location: "Ibeju-Lekki, Lagos", type: "land", status: "sale", price: 5000000, beds: 0, baths: 0, size: "600 sqm", img: "images/land.png" },
    { id: 6, name: "Mini Flat", location: "Rumuola, Rivers", type: "flat", status: "rent", price: 4200000, beds: 1, baths: 1, size: "60 sqm", img: "images/mini flat.png" },
    { id: 7, name: "3 Bedroom Bungalow", location: "Ajah, Lagos", type: "bungalow", 

status: "sale", price: 22000000, beds: 3, baths: 2, size: "200 sqm", img: "images/house6.jpg" },
    { id: 8, name: "Office Space", location: "Woji, Rivers", type: "office", status: "rent", price: 12000000, beds: 0, baths: 0, size: "150 sqm", img: "images/office.jpg" },
    { id: 9, name: "5 Bedroom Duplex", location: "Ajah, Lagos", type: "duplex", status: "sale", price: 65000000, beds: 5, baths: 4, size: "400 sqm", img: "images/house_5.jpeg" },
    { id: 10, name: "2 Bedroom Flat", location: "Rumuokoro, Rivers", type: "flat", status: "rent", price: 3500000, beds: 2, 

baths: 1, size: "100 sqm", img: "images/house_7.jpg" },
    { id: 11, name: "Waterfront Penthouse", location: "Lekki, Lagos", type: "duplex", status: "sale", price: 120000000, beds: 4, baths: 5, size: "450 sqm", img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=400" },
    { id: 12, name: "Cozy Studio", location: "Yaba, Lagos", type: "flat", status: "rent", price: 1800000, beds: 1, baths: 1, size: "45 sqm", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400" },
    { id: 13, name: "Commercial Warehouse", location: "Trans Amadi, Rivers", type: "office", status: "rent", price: 25000000, beds: 0, baths: 2, size: "800 sqm", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400" },
    { id: 14, name: "Executive 3 Bed Terrace", location: "Ikate, Lagos", type: "terrace", status: "sale", price: 75000000, beds: 3, baths: 4, size: "280 sqm", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400" },
    { id: 15, name: "Gated Estate Plot", location: "Akure, Lagos", type: "land", status: "sale", price: 4000000, beds: 0, baths: 0, size: "500 sqm", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400" },
    { id: 16, name: "Luxury Townhouse", location: "GRA Phase 2, Rivers", type: "terrace", status: "sale", price: 95000000, beds: 4, baths: 5, size: "320 sqm", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400" },

    { id: 17, name: "Affordable 2 Bed Flat", location: "Ikorodu, Lagos", type: "flat", status: "sale", price: 12000000, beds: 2, baths: 2, size: "90 sqm", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400" },
    { id: 18, name: "Detached Bungalow", location: "Elelenwo, Rivers", type: "bungalow", status: "sale", price: 30000000, beds: 3, baths: 3, size: "250 sqm", img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400" },
    { id: 19, name: "Serviced Apartment", location: "Victoria Island, Lagos", type: "flat", status: "rent", price: 8000000, beds: 2, baths: 3, size: "140 sqm", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400" },
    { id: 20, name: "Commercial Land", location: "Port Harcourt, Rivers", type: "land", status: "sale", price: 45000000, beds: 0, baths: 0, size: "1200 sqm", img: 

"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400" },
    { id: 21, name: "4 Bed Luxury Villa", location: "Chevron, Lagos", type: "duplex", status: "sale", price: 110000000, beds: 4, baths: 5, size: "380 sqm", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400" },
    { id: 22, name: "Shared Office Cubicles", location: "Ikeja, Lagos", type: "office", status: "rent", price: 1500000, beds: 0, baths: 1, size: "30 sqm", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400" },
    { id: 23, name: "Classic 3 Bed Flat", location: "Peter Odili, Rivers", type: "flat", status: "rent", price: 5000000, beds: 3, baths: 3, size: "160 sqm", img: "images/house_10.jpeg" },
    { id: 24, name: "Dry Residential Plot", location: "Epe, Lagos", type: "land", status: "sale", price: 2500000, beds: 0, baths: 0, size: "600 sqm", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400" },
    { id: 25, name: "Executive Office Suite", location: "Victoria Island, Lagos", type: "office", status: "rent", price: 18000000, beds: 0, baths: 2, size: "220 sqm", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400" },
    { id: 26, name: "Smart Home Duplex", location: "Ikoyi, Lagos", type: "duplex", status: "sale", price: 250000000, beds: 5, baths: 6, size: "600 sqm", img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=400" },
    { id: 27, name: "Cozy 1 Bed Apartment", location: "Surulere, Lagos", type: "flat", status: "rent", price: 2000000, beds: 1, baths: 1, size: "55 sqm", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400" },
    { id: 28, name: "Spacious Warehouse", location: "Ikeja, Lagos", type: "office", status: "rent", price: 35000000, beds: 0, baths: 2, size: "1000 sqm", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400" },
    { id: 29, name: "3 Bedroom Townhouse", location: "Bogije, Lagos", type: "terrace", status: "sale", price: 35000000, beds: 3, baths: 3, size: "190 sqm", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400" },

    { id: 30, name: "Waterfront Land", location: "Degema, Rivers", type: "land", status: "sale", price: 15000000, beds: 0, baths: 0, size: "1500 sqm", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400" },
    { id: 31, name: "Luxury Mansion", location: "Abuja", type: "duplex", status: "sale", price: 350000000, beds: 6, baths: 7, size: "850 sqm", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400" },
    { id: 32, name: "Standard Mini Flat", location: "Diobu, Rivers", type: "flat", status: "rent", price: 1200000, beds: 1, baths: 1, size: "50 sqm", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400" },
    { id: 33, name: "Retail Shop Space", 

location: "Ikeja, Lagos", type: "office", status: "rent", price: 6000000, beds: 0, baths: 1, size: "40 sqm", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400" },
    { id: 34, name: "Semi-Detached Duplex", location: "Lekki, Lagos", type: "duplex", status: "sale", price: 85000000, beds: 4, baths: 5, size: "310 sqm", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400" },
    { id: 35, name: "Agricultural Farmland", location: "Badagry, Lagos", type: "land", status: "sale", price: 1800000, beds: 0, baths: 0, size: "5000 sqm", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400" },
    { id: 36, name: "Penthouse Apartment", location: "GRA, Rivers", type: "flat", status: "sale", price: 55000000, beds: 3, baths: 4, 

size: "230 sqm", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400" }
];

let currentPage = 1;
const itemsPerPage = 9;

function formatPrice(price) {
    return "₦" + Number(price).toLocaleString("en-NG");
}

// Initialization on page load
window.onload = function() {
    if (document.getElementById("featuredGrid")) {
        renderFeatured();
    }
    if (document.getElementById("propertiesGrid")) {
        renderProperties();
    }
    if (document.getElementById("managerTableBody")) {
        renderManagerTable();
    }};

function renderFeatured() {
    const grid = document.getElementById("featuredGrid");
    grid.innerHTML = "";
    allProperties.slice(0, 6).forEach(p => {
        grid.appendChild(createCardElement(p));
    });
}

function renderProperties() {
    const type = 

document.getElementById("filterType").value;
    const status = document.getElementById("filterStatus").value;
    const loc = document.getElementById("filterLocation").value.toLowerCase();

    const filtered = allProperties.filter(p => {
        const matchType = (type === "all" || p.type === type);
        const matchStatus = (status === "all" || p.status === status);
        const matchLoc = (loc === "all" || p.location.toLowerCase().includes(loc));
        return matchType && matchStatus && matchLoc;
    });

    document.getElementById("resultCount").t

extContent = filtered.length;
    
    const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
    if (currentPage > totalPages) currentPage = 1;

    const start = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);

    const grid = document.getElementById("propertiesGrid");
    grid.innerHTML = "";

    if (paginated.length === 0) {
        grid.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:30px;">No properties match your 

filter.</p>`;
        document.getElementById("paginationControls").innerHTML = "";
        return;
    }

    paginated.forEach(p => {
        grid.appendChild(createCardElement(p));
    });

    renderPagination(totalPages);
}

function createCardElement(p) {
    const card = document.createElement("div");
    card.className = "card";
    const badgeClass = p.status === "rent" ? "card-badge rent" : "card-badge";
    const badgeText = p.status === "rent" ? 

"For Rent" : "For Sale";

    card.innerHTML = `
        <div class="card-top">
            <img src="${p.img}" alt="${p.name}">
            <span class="${badgeClass}">${badgeText}</span>
        </div>
        <div class="card-body">
            <h3>${p.name}</h3>
            <p class="location">📍 ${p.location}</p>
            <div class="details">
                ${p.beds > 0 ? `<span>🛏 ${p.beds} Beds</span>` : ''}
                ${p.baths > 0 ? `<span>🚿 ${p.baths} Baths</span>` : ''}
                <span>📐 ${p.size}</span>
            </div>
            <p class="price">${formatPrice(p.price)}${p.status === 'rent' ? '/yr' : ''}</p>

            <div class="card-btns">
                <button class="btn-view" onclick="openModal('${p.name}')">View Details</button>
                <button class="btn-enquire" onclick="openModal('${p.name}')">Enquire Now</button>
            </div>
        </div>
    `;
    return card;
}

function renderPagination(totalPages) {
    const controls = document.getElementById("paginationControls");
    if (!controls) return;
    controls.innerHTML = "";

    const makeBtn = (label, page, disabled, active) => {
        const btn = document.createElement("button");
        btn.textContent = label;
        btn.disabled = disabled;
        btn.style.cssText = `padding: 8px 14px; margin: 0 3px; border: 1px solid #ddd; border-radius: 5px;
        cursor: ${disabled ? 'not-allowed' : 'pointer'}; opacity: ${disabled ? 0.5 : 1};
        background: ${active ? '#e74c3c' : 'white'}; color: ${active ? 'white' : '#333'};`;
        btn.onclick = () => {
            currentPage = page;
            renderProperties();
            window.scrollTo({ top: 250, behavior: 'smooth'});
        };
        controls.appendChild(btn);
    };

    makeBtn("<< Prev", currentPage - 1, currentPage === 1, false);
    for (let i = 1; i <= totalPages; i++) {
        makeBtn(i, i, false, i === currentPage);
    }
    makeBtn("Next >>", currentPage + 1, currentPage === totalPages, false);
}

function filterProperties() {
    currentPage = 1;
    renderProperties();
}


function resetFilters() {
    document.getElementById("filterType").value = "all";
    document.getElementById("filterStatus").value = "all";
    document.getElementById("filterLocation").value = "all";
    currentPage = 1;
    renderProperties();
}
const overlay = document.getElementById('modalOverlay');
if (overlay) {
    overlay.addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
}

// Modal controls
function openModal(propertyName) {
    
document.getElementById('modalPropertyName').textContent = propertyName;
document.getElementById('modalOverlay').classList.add('active');
document.getElementById('modalForm').style.display = 'flex';
document.getElementById('successMsg').style.display = 'none';
    }


function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.getElementById('enquiryName').value ='';
    document.getElementById('enquiryPhone').value ='';
    document.getElementById('enquiryEmail').value ='';
    document.getElementById('enquiryMessage').value ='';
    document.getElementById('enquiryType').value ='';

}

async function submitEnquiry(e) {
    e.preventDefault();

    const name = document.getElementById('enquiryName').value.trim();
    const phone = document.getElementById('enquiryPhone').value.trim();
    const email = document.getElementById('enquiryEmail').value.trim();
    const serviceType = document.getElementById('enquiryType').value;
    const message = document.getElementById('enquiryMessage').value.trim();
    const propertyName = document.getElementById('modalPropertyName').textContent;

    if (!name || !phone || !serviceType) {
        alert('Please enter your name, phone number and enquiry type.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client_name: name,
                contact: phone,
                email: email,
                service_type: serviceType,
                project_details: `Property: ${propertyName}. Message: ${message}`
            })
        });


        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Unable to submit enquiry.');
        }

        document.getElementById('modalForm').style.display = 'none';
        document.getElementById('successMsg').style.display = 'block';

        setTimeout(() => {
            closeModal();
        }, 3000);

    } catch (error) {
        console.error('Enquiry submission error:', error);

        alert(error.message || 'Something went wrong. Please try again.');
    }
}


// Manager Portal Functions
function renderManagerTable() {
    const tbody = document.getElementById("managerTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    allProperties.forEach((p, index) => {
        const tr = document.createElement("tr");
        tr.style.borderBottom = "1px solid #eee";
        tr.innerHTML = `
            <td style="padding:12px;"><strong>${p.name}</strong></td>
            <td style="padding:12px;">${p.location}</td>
            <td style="padding:12px;">${p.type}</td>
            <td style="padding:12px;">${formatPrice(p.price)}</td>
            <td style="padding:12px;"><span style="padding:4px 8px; border-radius:4px; font-size:11px; background:${p.status==='Available'?'#e8f8ef':'#fff4d6'};">${p.status}</span></td>
            <td style="padding:12px;">
                <button onclick="deleteProp(${index})" style="background:#e74c3c; color:white; border:none; padding:5px 

10px; border-radius:4px; cursor:pointer;">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function addNewProperty(e) {
    e.preventDefault();
    const newProp = {
        id: allProperties.length + 1,
        name: document.getElementById('propertyName').value,
        location: document.getElementById('propertyLocation').value,
        type: document.getElementById('propertyType').value,
        status: 

document.getElementById('propertyStatus').value,
        price: Number(document.getElementById('propertyPrice').value),
        beds: 3, baths: 2, size: "200 sqm",
        img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"
    };
    allProperties.unshift(newProp);
    renderManagerTable();
    document.getElementById('propertyForm').reset();
    alert("Property added successfully!");
}

function deleteProp(index) {
    if (confirm("Are you sure you want to delete this property?")) {
        allProperties.splice(index, 1);
        renderManagerTable();

    }
}
