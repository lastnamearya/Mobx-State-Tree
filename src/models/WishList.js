import { types } from 'mobx-state-tree';

export const WishListItem = types
  .model({
    name: types.string,
    price: types.number,
    // image: types.optional(types.string, '')
    // We can also write this as an empty string, MST figures it out that it's optional, when snapshot (data) is not availabe then it mark as an empty string in our app.
    image: ''
  })
  .actions(self => ({
    changeName(newName) {
      self.name = newName;
    },
    changePrice(newPrice) {
      self.price = newPrice;
    },
    changeImage(newImage) {
      self.image = newImage;
    }
  }));

export const WishList = types
  .model({
    items: types.optional(types.array(WishListItem), [])
  })
  .actions(self => ({
    add(item) {
      self.items.push(item);
    }
  }));
