export const setUpdateSetting = function (next) {
  this.options.new = true;
  this.options.runValidators = true;
  next();
};
