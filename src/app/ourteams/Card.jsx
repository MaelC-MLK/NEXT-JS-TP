export default function Card({ role, first_name, last_name, phone_number }) {
  return (
    <figure className="aspect-card grid cursor-pointer overflow-hidden rounded duration-300 md:hover:scale-105">
      <div className="col-start-1 col-end-1 row-start-1 row-end-1">
        <img
          src="https://thispersondoesnotexist.com/"
          className="h-full object-cover"
        />
      </div>
      <figcaption className="bg-white text-foreground col-start-1 col-end-1 row-start-1 row-end-1 mx-4 mb-6 mt-4 self-end rounded bg-cover bg-center bg-no-repeat px-2 py-6">
        <h2 className="mb-1">{role}</h2>
        <div className="flex flex-row gap-2">
        <h3 className="text-foreground text-xs text-opacity-50">{first_name}</h3>
        <h3 className="text-foreground text-xs text-opacity-50">{last_name}</h3>
        </div>
        <h3 className="text-foreground text-xs text-opacity-50">{phone_number}</h3>        
      </figcaption>
    </figure>
  );
}
