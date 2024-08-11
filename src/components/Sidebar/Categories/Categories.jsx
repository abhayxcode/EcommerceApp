import React from "react";

import Input from "../../Input";

const Categories = () => {
  return (
    <section>
      <h2 className="text-[22px] font-normal mb-5 category-title">Category</h2>
      <div>
        <Input value="all" name="category" title="all" />
        <Input value={"laptop"} name="category" title="laptops" />
        <Input value={"camera"} name={"category"} title="cameras" />
        <Input value={"mobile"} name={"category"} title="mobiles" />
        <Input value={"headphone"} name={"category"} title="headphones" />
      </div>
    </section>
  );
};

export default Categories;
