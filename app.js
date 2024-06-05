new Vue({
  el: "#app",
  data: {
    moinkhans: [{ id: 1, name: "আমার নাম মঈন খান " }],
    newItem: "",
  },
  methods: {
    addItem() {
      if (this.newItem !== "") {
        this.moinkhans.push({
          id: this.moinkhans.length + 1,
          name: this.newItem,
        });
        this.newItem = "";
      }
    },
  },
});
