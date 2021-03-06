IMPORT("EnergyNet");
IMPORT("flags");
IMPORT("ToolLib");
IMPORT("BackpackAPI");
IMPORT("StorageInterface");

const LOG_TAG = "ForestryPE";
const GROUP_ITEM_PIPE = ICRender.getGroup("item-pipe");
const startTime = java.lang.System.currentTimeMillis();
const APATITE_GEN_BIOMES = [3, 131, 34, 162];
const EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
const RF = EnergyTypeRegistry.assureEnergyType("RF", 0.25);
const AdaptedScriptEntity = ModAPI.requireGlobal("Entity");
const setLoadingTip = ModAPI.requireGlobal("MCSystem.setLoadingTip");
const Dimension = Native.Dimension;
const COMBS = [];

Entity.getArmorSlot = function (ent) {
    return AdaptedScriptEntity.getArmor(ent);
};

function log(msg, tag) {
    Logger.Log("[" + LOG_TAG + "] " + msg, tag);
}

function summonException(msg) {
    throw new function () {
        this.toString = function () {
            return msg;
        }
    };
}

Object.values = function (obj) {
    let result = [], key;

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key]);
        }
    }

    return result;
};