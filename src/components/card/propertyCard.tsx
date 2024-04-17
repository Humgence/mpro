import { motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// type OwnerTagType = {
// 	label: string;
// 	icon?: JSX.Element;
// };
type AgentTagType = {
  name: string;
  contact?: string;
  email?: string;
  icon?: JSX.Element;
};
export interface PropertyCardProps {
  id: number;
  imageUrl: string[];
  tags?: string[];
  specs?: string[];
  title: string;
  agents?: AgentTagType[];
  description: string;
  address: string;
  opportunity: string;
  locationDetails: string;
  mapLocation: {
    latitude: string;
    longitude: string;
  };
  status: string[];
  totalPrice: number;
}

const PropertyCard = ({
  id,
  imageUrl,
  tags,
  specs,
  title,
  address,
  agents,
}: PropertyCardProps) => {
  return (
    <Link href={`/property/specific`}>
      <motion.div
       initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.3 }}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0.9 },
				}}
        className="flex flex-col gap-5 max-w-[80dvw] sm:max-w-[580px] lg:max-w-[475px]"
      >
        {/* img */}
        <div className="w-full h-[250px]">
          <Image
            src={imageUrl[0]}
            alt="Property Image"
            height={1000}
            width={1000}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            {/* tags */}
            {tags && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, key) => (
                  <Tag label={tag} key={tag + key} />
                ))}
              </div>
            )}
            {/* specs */}
            {specs && (
              <div className="flex flex-wrap gap-2">
                {specs
                  .reduce((acc: string[], curr, index) => {
                    if (index === 0) return [...acc, curr];
                    return [...acc, "|", curr];
                  }, [])
                  .map((spec, key) => {
                    return (
                      <p
                        key={spec + key}
                        className={`font-light text-gray-400 text-sm`}
                      >
                        {spec}
                      </p>
                    )
                  })}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-5">
            {/* title */}
            <p className="text-[#013146] text-2xl font-light">{title}</p>
            {/* <p>{address}</p> */}
            {/* owners */}
            {agents && (
              <div className="flex flex-wrap gap-2">
                {agents
                  .reduce((acc: AgentTagType[], curr, index) => {
                    if (index === 0) return [...acc, curr];
                    return [
                      ...acc,
                      {
                        name: "|"
                      },
                      curr
                    ];
                  }, [])
                  .map((agent, key) => (
                    <AgentTag name={agent.name} key={agent.name + key} />
                  ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default PropertyCard;

const Tag = ({ label }: { label: string }) => {
  return (
    <p className="bg-gray-100 text-slate-800 font-light uppercase py-1 px-2 text-xs tracking-wide">
      {label}
    </p>
  );
};

const AgentTag = ({ name }: AgentTagType) => {
  return (
    <div className="flex flex-wrap text-gray-400 items-center gap-1">
      {name !== "|" && (
        <div className="h-3 w-3">
          <User className="h-full w-full" />
        </div>
      )}
      <p className="font-light text-xs tracking-wide">{name}</p>
    </div>
  );
};
