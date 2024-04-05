import "./Price.css";
import Input from "../../Input";

const Price = () => {
  return (
    <section>
      <h2 className="text-[22px] font-normal mb-5 price-title">
        Filter by Price
      </h2>

      <div>
        <Input value="all" name="price" title="all" />
        <Input value={["0", "99"]} title="$ 0-99" name="price" />
        <Input value={["100", "499"]} title="$ 100-499" name="price" />
        <Input value={["500", "999"]} title="$ 500-999" name="price" />
        <Input value={["1000", "1999"]} title="$ 1000-1999" name="price" />
        <Input value={["2000", "9999"]} title="$ 2000+" name="price" />
      </div>
    </section>
  );
};

export default Price;
