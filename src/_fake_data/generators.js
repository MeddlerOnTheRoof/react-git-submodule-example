import categoryNames from './categoryNames';
import deviceNames from './deviceNames';
import supplierNames from './supplierNames';

// this file is used to generate seed data as if from an API
// though I currently have not implemented an artificial delay
// I use localStorage to persist so that across 'sessions'
// the user does experience dramatic variations in what data looks likee
// where as the rest of the app will use session persistence
// note this is just for testing purposes and I would be wounded
// to see something like this enter an enterprise development environment

const MIN_GADGET_COST = 3;
const MAX_GADGET_COST = 30;
const MIN_WIDGET_COST = 1;
const MAX_WIDGET_COST = 25;

const MIN_GADGET_PRICE = 5;
const MAX_GADGET_PRICE = 100;
const MIN_WIDGET_PRICE = 1;
const MAX_WIDGET_PRICE = 49;

const MIN_DEVICE_STOCK = 0;
const MAX_DEVICE_STOCK = 600;

const rng = ({ ceiling = null, decimal = false, floor = null }) => {
    let randomNum = Math.random() * ceiling;

    if (!decimal) {
        randomNum = Math.floor(randomNum);
        floor = Math.floor(floor);
    }

    return randomNum + floor;
};

const splitArray = arr => {
    arr = arr.slice();
    let arrs = [], size = 1;
    const max = arr.length - 1;

    while (arr.length > 0) {
        size = Math.min(max, Math.floor((Math.random() * max) + 1));
        arrs.push(arr.splice(0, size));
    }

    return arrs;
}

const gadgetConstructor = (i, name, category, supplier) => {
    return {
        id: i + 1,
        name: name,
        category: category,
        supplier: supplier,
        cost: rng({ ceiling: MAX_GADGET_COST, decimal: true, floor: MIN_GADGET_COST }).toFixed(2),
        price: rng({ ceiling: MAX_GADGET_PRICE, decimal: true, floor: MIN_GADGET_PRICE }).toFixed(2),
        volume: rng({ ceiling: MAX_DEVICE_STOCK, decimal: false, floor: MIN_DEVICE_STOCK })
    };
};

const widgetConstructor = (i, name, category, supplier) => {
    return {
        id: i + 1,
        name: name,
        category: category,
        supplier: supplier,
        cost: rng({ ceiling: MAX_WIDGET_COST, decimal: true, floor: MIN_WIDGET_COST }).toFixed(2),
        price: rng({ ceiling: MAX_WIDGET_PRICE, decimal: true, floor: MIN_WIDGET_PRICE }).toFixed(2),
        volume: rng({ ceiling: MAX_DEVICE_STOCK, decimal: false, floor: MIN_DEVICE_STOCK })
    };
};

export const seedDataGenerator = () => {
    const KEY = 'SEED_DATA';
    const storedData = localStorage.getItem(KEY);

    // check if localStorage contains seed data
    if (storedData !== null)
        return JSON.parse(storedData);

    console.log(deviceNames.length);

    // use rng to determine breakdown of widgets to gadgets
    const totalGadgets = rng({ ceiling: (deviceNames.length - 1) * .66, decimal: false, floor: deviceNames.length * .33 });
    const totalWidgets = deviceNames.length - totalGadgets;

    let deviceNamesDepleting = deviceNames.slice();
    const [gadgetCategories, widgetCategories] = splitArray(categoryNames);
    let gadgets = [];
    let widgets = [];

    // create gadgets, depleting device names as gadgets are created
    for (let i = 0; i < totalGadgets; i++) {
        const deviceNameIndex = [rng({ ceiling: (deviceNamesDepleting.length - 1), decimal: false, floor: 0 })];
        const name = deviceNamesDepleting[deviceNameIndex];
        const category = gadgetCategories[rng({ ceiling: (gadgetCategories.length - 1), decimal: false, floor: 0 })];
        const supplier = supplierNames[rng({ ceiling: (supplierNames.length - 1), decimal: false, floor: 0 })];

        gadgets.push(gadgetConstructor(i, name, category, supplier));

        deviceNamesDepleting.splice(deviceNameIndex, 1);
    }

    // create widgets, depleting devicee names as widgets are created
    for (let i = 0; i < totalWidgets; i++) {
        const deviceNameIndex = [rng({ ceiling: (deviceNamesDepleting.length - 1), decimal: false, floor: 0 })];
        const name = deviceNamesDepleting[deviceNameIndex];
        const category = widgetCategories[rng({ ceiling: (widgetCategories.length - 1), decimal: false, floor: 0 })];
        const supplier = supplierNames[rng({ ceiling: (supplierNames.length - 1), decimal: false, floor: 0 })];

        widgets.push(widgetConstructor(i, name, category, supplier));

        deviceNamesDepleting.splice(deviceNameIndex, 1);
    }

    const seedData = {
        gadgets: gadgets,
        gadgetCategories: gadgetCategories,
        suppliers: supplierNames,
        widgets: widgets,
        widgetCategories: widgetCategories
    };

    localStorage.setItem(KEY, JSON.stringify(seedData));

    return seedData;
};
