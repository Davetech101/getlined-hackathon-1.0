type h3Props = { head: string; span: string };
const H3 = ({ head, span }: h3Props) => {
  return (
    <h3 className="text-5xl mb-10">
      {head}
      <br />
      <span className="text-pink block mt-4">{span}</span>
    </h3>
  );
};

export default H3;
