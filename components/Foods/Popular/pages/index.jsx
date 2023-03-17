import Image from "next/image";

const Popular = (props) => {
  return (
    <div className="flex items-center justify-around py-[7rem]">
      <div className="grid grid-cols-fluid gap-10 w-full container mx-auto">
        {console.log(props.data)}

        <h1>Hello</h1>

        {/* {props.data.recipes.map((recipe) => (
          <div key={recipe.id}>
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={800}
              height={800}
              priority={true}
            />
            <h3>{recipe.title}</h3>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=9`
  );
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Popular;
