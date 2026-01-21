const user = { //name and active state
    name: "Michelle",
    isActive: true
};

// Before:
function getCard(user) {
    if (user.isActive) {
        return `User ${user.name} is Active.`;
    } else {
        return `User ${user.name} is Offline.`;
    }
};

// After (they need to write this):
const getCard = () => `User ${user.name} is ${user.isActive ? "Active" : "Offline"}`;

