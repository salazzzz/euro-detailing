// script.js
const comparisonSlider = document.getElementById("comparisonSlider");
const afterWrapper = document.getElementById("afterWrapper");
const comparisonLine = document.getElementById("comparisonLine");
const comparisonHandle = document.getElementById("comparisonHandle");

if (comparisonSlider && afterWrapper && comparisonLine && comparisonHandle) {
  comparisonSlider.addEventListener("input", function () {
    const value = this.value + "%";
    afterWrapper.style.width = value;
    comparisonLine.style.left = value;
    comparisonHandle.style.left = value;
  });
}

/* =========================
   3 CARD SERVICES SLIDER
========================= */

const sliderCardData = {
  interior: {
    sedan: {
      monthlyMaintenancePrice: "$90",
      basic: {
        price: "$105",
        time: "1.5-2 hrs",
        bookingLink: "https://cal.com/eric-salas/basic-interior-detail",
        list: [
          "Full thorough vacuum",
          "Dashboard and panels wiped and decontaminated",
          "floor mats cleaned",
          "Interior glass cleaned",
          "Light dust and debris removal"
        ]
      },
      premium: {
        price: "$150",
        time: "2.5-3 hrs",
        bookingLink: "https://cal.com/eric-salas/premium-interior-detail",
        list: [
          "thorough vacuum and interior blowout",
          "Detailed dash, panels, and console cleaning",
          "light hair and stain removal",
          "Interior glass and floor mats",
          "steam clean and leather conditioner"
        ]
      },
      maintenance: {
        price: "$120",
        time: "2.5-3 hrs",
        bookingLink: "https://cal.com/eric-salas/maintenance-interior-detail",
        list: [
          "Discounted first premium-level detail",
          "Built for recurring monthly upkeep",
          "Interior surfaces kept maintained",
          "Ongoing maintenance instead of full neglect recovery"
        ]
      }
    },

    suv: {
      monthlyMaintenancePrice: "$105",
      basic: {
        price: "$120",
        time: "1.5-2 hrs",
        bookingLink: "https://cal.com/eric-salas/basic-interior-detail-suv",
        list: [
          "Full thorough vacuum",
          "Dashboard and panels wiped and decontaminated",
          "floor mats cleaned",
          "Interior glass cleaned",
          "Light dust and debris removal"
        ]
      },
      premium: {
        price: "$170",
        time: "2.5-3 hrs",
        bookingLink: "https://cal.com/eric-salas/premium-interior-detail-suv",
        list: [
          "thorough vacuum and interior blowout",
          "Detailed dash, panels, and console cleaning",
          "light hair and stain removal",
          "Interior glass and floor mats",
          "steam clean and leather conditioner"
        ]
      },
      maintenance: {
        price: "$140",
        time: "2.5-3 hrs",
        bookingLink: "https://cal.com/eric-salas/maintenance-interior-detail-suv",
        list: [
          "Discounted first premium-level detail",
          "Built for recurring monthly upkeep",
          "Interior surfaces kept maintained",
          "Ongoing maintenance instead of full neglect recovery"
        ]
      }
    },

    "large-suv": {
      monthlyMaintenancePrice: "$125",
      basic: {
        price: "$140",
        time: "2-2.5 hrs",
        bookingLink: "https://cal.com/eric-salas/basic-interior-detail-large-suv-truck",
        list: [
          "Full thorough vacuum",
          "Dashboard and panels wiped and decontaminated",
          "floor mats cleaned",
          "Interior glass cleaned",
          "Light dust and debris removal"
        ]
      },
      premium: {
        price: "$190",
        time: "3-3.5 hrs",
        bookingLink: "https://cal.com/eric-salas/premium-interior-detail-large-suv-truck",
        list: [
          "thorough vacuum and interior blowout",
          "Detailed dash, panels, and console cleaning",
          "light hair and stain removal",
          "Interior glass and floor mats",
          "steam clean and leather conditioner"
        ]
      },
      maintenance: {
        price: "$160",
        time: "3-3.5 hrs",
        bookingLink: "https://cal.com/eric-salas/maintenance-interior-detail-large-suv-truck",
        list: [
          "Discounted first premium-level detail",
          "Built for recurring monthly upkeep",
          "Interior surfaces kept maintained",
          "Ongoing maintenance instead of full neglect recovery"
        ]
      }
    },

    truck: {
      monthlyMaintenancePrice: "$125",
      basic: {
        price: "$140",
        time: "2-2.5 hrs",
        bookingLink: "https://cal.com/eric-salas/basic-interior-detail-large-suv-truck",
        list: [
          "Full thorough vacuum",
          "Dashboard and panels wiped and decontaminated",
          "floor mats cleaned",
          "Interior glass cleaned",
          "Light dust and debris removal"
        ]
      },
      premium: {
        price: "$190",
        time: "3-3.5 hrs",
        bookingLink: "https://cal.com/eric-salas/premium-interior-detail-large-suv-truck",
        list: [
          "thorough vacuum and interior blowout",
          "Detailed dash, panels, and console cleaning",
          "light hair and stain removal",
          "Interior glass and floor mats",
          "steam clean and leather conditioner"
        ]
      },
      maintenance: {
        price: "$160",
        time: "3-3.5 hrs",
        bookingLink: "https://cal.com/eric-salas/maintenance-interior-detail-large-suv-truck",
        list: [
          "Discounted first premium-level detail",
          "Built for recurring monthly upkeep",
          "Interior surfaces kept maintained",
          "Ongoing maintenance instead of full neglect recovery"
        ]
      }
    }
  },

  bundle: {
    sedan: {
      monthlyMaintenancePrice: "$135",
      basic: {
        price: "$150",
        time: "2.5-3 hrs",
        bookingLink: "https://cal.com/eric-salas/basic-bundle-detail",
        list: [
          "Interior basic service included",
          "Exterior basic service included",
          "Better value than booking separately",
          "One full appointment",
          "Balanced inside-and-out refresh"
        ]
      },
      premium: {
        price: "$230",
        time: "3-4 hrs",
        bookingLink: "https://cal.com/eric-salas/premium-bundle-detail",
        list: [
          "Interior premium service included",
          "Exterior premium service included",
          "Best value for a full transformation",
          "includes light pet hair and floor mat restoration",
          "Will have envious neighbours"
        ]
      },
      maintenance: {
        price: "$210",
        time: "3-4 hrs",
        bookingLink: "https://cal.com/eric-salas/maintenance-bundle-detail",
        list: [
          "Discounted first premium bundle detail",
          "Designed for recurring monthly upkeep",
          "Interior and exterior maintained together",
          "Better long-term comfort and worth of vehicle",
          "Consistent full-vehicle care plan"
        ]
      }
    },

    suv: {
      monthlyMaintenancePrice: "$155",
      basic: {
        price: "$175",
        time: "3-3.5 hrs",
        bookingLink: "https://cal.com/eric-salas/basic-bundle-detail-suv",
        list: [
          "Interior basic service included",
          "Exterior basic service included",
          "Better value than booking separately",
          "One full appointment",
          "Balanced inside-and-out refresh"
        ]
      },
      premium: {
        price: "$260",
        time: "3-4 hrs",
        bookingLink: "https://cal.com/eric-salas/premium-bundle-detail-suv",
        list: [
          "Interior premium service included",
          "Exterior premium service included",
          "Best value for a full transformation",
          "includes light pet hair and floor mat restoration",
          "Will have envious neighbours"
        ]
      },
      maintenance: {
        price: "$240",
        time: "3-4 hrs",
        bookingLink: "https://cal.com/eric-salas/maintenance-bundle-detail-suv",
        list: [
          "Discounted first premium bundle detail",
          "Designed for recurring monthly upkeep",
          "Interior and exterior maintained together",
          "Better long-term comfort and worth of vehicle",
          "Consistent full-vehicle care plan"
        ]
      }
    },

    "large-suv": {
      monthlyMaintenancePrice: "$175",
      basic: {
        price: "$200",
        time: "3-4 hrs",
        bookingLink: "https://cal.com/eric-salas/basic-bundle-detail-large-suv",
        list: [
          "Interior basic service included",
          "Exterior basic service included",
          "Better value than booking separately",
          "One full appointment",
          "Balanced inside-and-out refresh"
        ]
      },
      premium: {
        price: "$280",
        time: "3.5-4.5 hrs",
        bookingLink: "https://cal.com/eric-salas/premium-bundle-detail-large-suv",
        list: [
          "Interior premium service included",
          "Exterior premium service included",
          "Best value for a full transformation",
          "includes light pet hair and floor mat restoration",
          "Will have envious neighbours"
        ]
      },
      maintenance: {
        price: "$260",
        time: "3.5-4.5 hrs",
        bookingLink: "https://cal.com/eric-salas/maintenance-bundle-detail-large-suv",
        list: [
          "Discounted first premium bundle detail",
          "Designed for recurring monthly upkeep",
          "Interior and exterior maintained together",
          "Better long-term comfort and worth of vehicle",
          "Consistent full-vehicle care plan"
        ]
      }
    },

    truck: {
      monthlyMaintenancePrice: "$180",
      basic: {
        price: "$205",
        time: "3.5-4 hrs",
        bookingLink: "https://cal.com/eric-salas/basic-bundle-detail-truck",
        list: [
          "Interior basic service included",
          "Exterior basic service included",
          "Better value than booking separately",
          "One full appointment",
          "Balanced inside-and-out refresh"
        ]
      },
      premium: {
        price: "$285",
        time: "3.5-4.5 hrs",
        bookingLink: "https://cal.com/eric-salas/premium-bundle-detail-truck",
        list: [
          "Interior premium service included",
          "Exterior premium service included",
          "Best value for a full transformation",
          "includes light pet hair and floor mat restoration",
          "Will have envious neighbours"
        ]
      },
      maintenance: {
        price: "$265",
        time: "3.5-4.5 hrs",
        bookingLink: "https://cal.com/eric-salas/maintenance-bundle-detail-truck",
        list: [
          "Discounted first premium bundle detail",
          "Designed for recurring monthly upkeep",
          "Interior and exterior maintained together",
          "Better long-term comfort and worth of vehicle",
          "Consistent full-vehicle care plan"
        ]
      }
    }
  },

  exterior: {
    sedan: {
      monthlyMaintenancePrice: "$60",
      basic: {
        price: "$65",
        time: "45min-1+ hrs",
        bookingLink: "https://cal.com/eric-salas/basic-exterior-detail",
        list: [
          "Ph neutral hand wash and alkali prewash",
          "Wheel and tire clean",
          "Bug and grime removal",
          "Exterior glass cleaned",
          "wax finish"
        ]
      },
      premium: {
        price: "$100",
        time: "1-2 hrs",
        bookingLink: "https://cal.com/eric-salas/premium-exterior-detail",
        list: [
          "Includes basic service",
          "Acid wash for wheels and tires",
          "clay bar treatment",
          "includes light sap removal",
          "Applied 90 day protector wax"
        ]
      },
      maintenance: {
        price: "$85",
        time: "1-2 hrs",
        bookingLink: "https://cal.com/eric-salas/maintenance-exterior-detail",
        list: [
          "Discounted first premium-level detail",
          "Built for recurring monthly upkeep",
          "Exterior finish and protective coating maintained regularly",
          "Helps preserve condition and value over time"
        ]
      }
    },

    suv: {
      monthlyMaintenancePrice: "$65",
      basic: {
        price: "$75",
        time: "45min-1+ hrs",
        bookingLink: "https://cal.com/eric-salas/basic-exterior-detail-suv",
        list: [
          "Ph neutral hand wash and alkali prewash",
          "Wheel and tire clean",
          "Bug and grime removal",
          "Exterior glass cleaned",
          "wax finish"
        ]
      },
      premium: {
        price: "$110",
        time: "1-2 hrs",
        bookingLink: "https://cal.com/eric-salas/premium-exterior-detail-suv",
        list: [
          "Includes basic service",
          "Acid wash for wheels and tires",
          "clay bar treatment",
          "includes light sap removal",
          "Applied 90 day protector wax"
        ]
      },
      maintenance: {
        price: "$95",
        time: "1-2 hrs",
        bookingLink: "https://cal.com/eric-salas/maintenance-exterior-detail-suv",
        list: [
          "Discounted first premium-level detail",
          "Built for recurring monthly upkeep",
          "Exterior finish and protective coating maintained regularly",
          "Helps preserve condition and value over time"
        ]
      }
    },

    "large-suv": {
      monthlyMaintenancePrice: "$70",
      basic: {
        price: "$80",
        time: "1-1.5 hrs",
        bookingLink: "https://cal.com/eric-salas/basic-exterior-detail-large-suv",
        list: [
          "Ph neutral hand wash and alkali prewash",
          "Wheel and tire clean",
          "Bug and grime removal",
          "Exterior glass cleaned",
          "wax finish"
        ]
      },
      premium: {
        price: "$115",
        time: "1-2 hrs",
        bookingLink: "https://cal.com/eric-salas/premium-exterior-detail-large-suv",
        list: [
          "Includes basic service",
          "Acid wash for wheels and tires",
          "clay bar treatment",
          "includes light sap removal",
          "Applied 90 day protector wax"
        ]
      },
      maintenance: {
        price: "$100",
        time: "1-2 hrs",
        bookingLink: "https://cal.com/eric-salas/maintenance-exterior-detail-large-suv",
        list: [
          "Discounted first premium-level detail",
          "Built for recurring monthly upkeep",
          "Exterior finish and protective coating maintained regularly",
          "Helps preserve condition and value over time"
        ]
      }
    },

    truck: {
      monthlyMaintenancePrice: "$75",
      basic: {
        price: "$85",
        time: "1 hrs",
        bookingLink: "https://cal.com/eric-salas/basic-exterior-detail-truck",
        list: [
          "Ph neutral hand wash and alkali prewash",
          "Wheel and tire clean",
          "Bug and grime removal",
          "Exterior glass cleaned",
          "wax finish"
        ]
      },
      premium: {
        price: "$120",
        time: "1.5-2 hrs",
        bookingLink: "https://cal.com/eric-salas/premium-exterior-detail-truck",
        list: [
          "Includes basic service",
          "Acid wash for wheels and tires",
          "clay bar treatment",
          "includes light sap removal",
          "Applied 90 day protector wax"
        ]
      },
      maintenance: {
        price: "$105",
        time: "1.5-2 hrs",
        bookingLink: "https://cal.com/eric-salas/maintenance-exterior-detail-truck",
        list: [
          "Discounted first premium-level detail",
          "Built for recurring monthly upkeep",
          "Exterior finish and protective coating maintained regularly",
          "Helps preserve condition and value over time"
        ]
      }
    }
  }
};

const sliderCards = Array.from(document.querySelectorAll(".slide-card"));
const sliderPrev = document.getElementById("slider-prev");
const sliderNext = document.getElementById("slider-next");
const sliderToggleButtons = document.querySelectorAll(".slide-toggle-btn");
const maintenanceButtons = document.querySelectorAll(".maintenance-btn");
const vehicleOptionButtons = document.querySelectorAll(".vehicle-option-btn");

let currentCenterIndex = 1;
let selectedVehicle = "sedan";

const selectedPlans = {
  interior: "basic",
  bundle: "basic",
  exterior: "basic"
};

function updateCardContent(service) {
  const selectedPlan = selectedPlans[service];
  const vehicleData = sliderCardData[service][selectedVehicle];
  const data = vehicleData[selectedPlan];

  document.getElementById(`${service}-price`).textContent = data.price;
  document.getElementById(`${service}-time`).textContent = data.time;
  document.getElementById(`${service}-list`).innerHTML = data.list
    .map(item => `<li>${item}</li>`)
    .join("");

  const bookingButton = document.getElementById(`${service}-book-btn`);
  if (bookingButton) {
    bookingButton.href = data.bookingLink;
  }

  const maintenanceNote = document.getElementById(`${service}-maintenance-note`);
  if (maintenanceNote) {
    maintenanceNote.textContent = `Reduced first time fare, then monthly maintenance detail price (${vehicleData.monthlyMaintenancePrice}).`;
  }
}

function updateMaintenanceVisibility(service) {
  const wrap = document.getElementById(`${service}-maintenance-wrap`);
  if (!wrap) return;

  if (
    selectedPlans[service] === "premium" ||
    selectedPlans[service] === "maintenance"
  ) {
    wrap.classList.add("show");
  } else {
    wrap.classList.remove("show");
  }
}

function updateButtonStates(service) {
  document
    .querySelectorAll(`.slide-toggle-btn[data-service="${service}"]`)
    .forEach(btn => {
      btn.classList.remove("active");
      if (btn.dataset.plan === selectedPlans[service]) {
        btn.classList.add("active");
      }
    });

  document
    .querySelectorAll(`.maintenance-btn[data-service="${service}"]`)
    .forEach(btn => {
      btn.classList.toggle("active", selectedPlans[service] === "maintenance");
    });
}

function updateVehicleButtonStates() {
  vehicleOptionButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.vehicle === selectedVehicle);
  });
}

function renderService(service) {
  updateCardContent(service);
  updateMaintenanceVisibility(service);
  updateButtonStates(service);
}

function renderAllServices() {
  renderService("interior");
  renderService("bundle");
  renderService("exterior");
}

function renderSliderPositions() {
  sliderCards.forEach((card, index) => {
    card.classList.remove("left", "center", "right", "hidden-left", "hidden-right");

    if (index === currentCenterIndex) {
      card.classList.add("center");
    } else if (
      index === currentCenterIndex - 1 ||
      (currentCenterIndex === 0 && index === sliderCards.length - 1)
    ) {
      card.classList.add("left");
    } else if (
      index === currentCenterIndex + 1 ||
      (currentCenterIndex === sliderCards.length - 1 && index === 0)
    ) {
      card.classList.add("right");
    } else if (index < currentCenterIndex) {
      card.classList.add("hidden-left");
    } else {
      card.classList.add("hidden-right");
    }
  });
}

function moveSliderNext() {
  currentCenterIndex = (currentCenterIndex + 1) % sliderCards.length;
  renderSliderPositions();
}

function moveSliderPrev() {
  currentCenterIndex = (currentCenterIndex - 1 + sliderCards.length) % sliderCards.length;
  renderSliderPositions();
}

if (sliderPrev) {
  sliderPrev.addEventListener("click", moveSliderPrev);
}

if (sliderNext) {
  sliderNext.addEventListener("click", moveSliderNext);
}

sliderToggleButtons.forEach(button => {
  button.addEventListener("click", () => {
    const service = button.dataset.service;
    const plan = button.dataset.plan;

    selectedPlans[service] = plan;
    renderService(service);
  });
});

maintenanceButtons.forEach(button => {
  button.addEventListener("click", () => {
    const service = button.dataset.service;
    selectedPlans[service] = "maintenance";
    renderService(service);
  });
});

vehicleOptionButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedVehicle = button.dataset.vehicle;
    updateVehicleButtonStates();
    renderAllServices();
  });
});

updateVehicleButtonStates();
renderAllServices();
renderSliderPositions();

/* =========================
   SCROLL TO CENTER SECTIONS
========================= */

function scrollToSectionCenter(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const sectionRect = section.getBoundingClientRect();
  const sectionTop = window.pageYOffset + sectionRect.top;
  const sectionHeight = section.offsetHeight;
  const viewportHeight = window.innerHeight;

  let targetScroll = sectionTop - (viewportHeight / 2) + (sectionHeight / 2);

  const maxScroll = document.documentElement.scrollHeight - viewportHeight;
  targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

  window.scrollTo({
    top: targetScroll,
    behavior: "smooth"
  });
}
document.querySelectorAll("[data-scroll-target]").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.dataset.scrollTarget;
    scrollToSectionCenter(targetId);
  });
});

/* =========================
   FOOTER YEAR
========================= */

const footerYear = document.getElementById("footer-year");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}