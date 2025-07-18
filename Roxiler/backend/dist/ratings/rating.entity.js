"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
const typeorm_1 = require("typeorm");
const stores_entity_1 = require("../stores/stores.entity");
const users_entity_1 = require("../users/users.entity");
let Rating = class Rating {
};
exports.Rating = Rating;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Rating.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rating.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => stores_entity_1.Store, (store) => store.ratings, { onDelete: 'CASCADE' }),
    __metadata("design:type", typeof (_a = typeof stores_entity_1.Store !== "undefined" && stores_entity_1.Store) === "function" ? _a : Object)
], Rating.prototype, "store", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, (user) => user.ratings, { onDelete: 'CASCADE' }),
    __metadata("design:type", users_entity_1.User)
], Rating.prototype, "user", void 0);
exports.Rating = Rating = __decorate([
    (0, typeorm_1.Entity)()
], Rating);
//# sourceMappingURL=rating.entity.js.map