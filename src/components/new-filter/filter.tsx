import React, { useState } from "react";
import {
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  type InputProps,
  Text,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import Select, {
  type GroupBase,
  type OptionsOrGroups,
  type StylesConfig,
} from "react-select";
import { SectionLayout } from "@/layouts";

const PropertyType = [
  { value: "Business", label: "Business" },
  { value: "Retail", label: "Retail" },
  { value: "Industrial", label: "Industrial" },
];

const PropertyStatus = [
  { value: "For Sale", label: "For Sale" },
  { value: "For Lease", label: "For Lease" },
];

const PropertySize = [
  {
    value: { min: 0, max: 1000 },
    label: "Between 0 and 1000",
  },
  {
    value: { min: 1000, max: 5000 },
    label: "Between 1000 and 5000",
  },
  {
    value: { min: 5000, max: 10000 },
    label: "Between 500 and 1000",
  },
  {
    value: { min: 10000, max: 30000 },
    label: "Between 10000 and 30000",
  },
  {
    value: { min: 30000, max: 40000 },
    label: "40000+",
  },
];

const Broker = [
  { value: "Alex Johnson", label: "Alex Johnson" },
  { value: "John Doe", label: "John Doe" },
  { value: "Jane Smith", label: "Jane Smith" },
];

const customStyles: StylesConfig = {
  container: (baseStyles, state) => ({
    ...baseStyles,
    outline: "none",
    border: "none",
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    overflowY: "scroll",
    backgroundColor: "#0e465f", // Set background color to transparent
    padding: "0.6rem 1.5rem",
    border: "none",
    outline: "none",
    color: "white", // Set text color to EBC49F
    "::-webkit-scrollbar": {
      width: 0,
    },
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: "#dddddd",
    cursor: "pointer",
    marginTop: "0.4rem",
    alignSelf: "start",
    ":hover": {
      color: "EBC49F",
    },
  }),
  clearIndicator: (baseStyles) => ({
    ...baseStyles,
    color: "#dddddd",
    cursor: "pointer",
    marginTop: "0.4rem",
    alignSelf: "start",
    ":hover": {
      color: "EBC49F",
    },
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "white",
  }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  menu: (baseStyles) => ({
    ...baseStyles,
    padding: "0.5rem",
    backgroundColor: "#0e465f",
    backdropFilter: "blur(4px)",
    color: "white",
    border: "none",
    zIndex: 9999,
  }),
  option: (baseStyles) => ({
    ...baseStyles,
    color: "white",
    borderRadius: "0.5rem",
    backgroundColor: "transparent",
    ":focus": {
      backgroundColor: "transparent",
    },
    ":active": {
      backgroundColor: "transparent",
    },
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: "white",
  }),
  multiValue: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#013146",
    color: "white",
    // Set background color of selected tag to EBC49F
  }),
  multiValueLabel: (base, props) => ({
    ...base,
    color: "white",
  }),
  multiValueRemove(base, props) {
    return {
      ...base,
      borderRadius: "50%",
      marginTop: "0.20rem",
      marginBottom: "0.20rem",
      marginLeft: "0.10rem",
      marginRight: "0.10rem",
      padding: "0.2rem",
    };
  },
};
type SizeFilter = {
  min: number;
  max: number;
};

export type FilterType = {
  address: string | null;
  propertyType: string[];
  propertyStatus: string[];
  propertySize: SizeFilter[];
  broker: string | null;
  salePriceMin: number;
  salePriceMax: number;
  pricePersfMin: number;
  pricePersfMax: number;
};

interface Label {
  label: string;
}
type CustomInputProps = Omit<
  InputProps,
  "borderWidth" | "borderColor" | "borderRadius" | "size"
> &
  Label;

const CustomInput = ({ label, ...props }: CustomInputProps) => {
  return (
    <Input
      border={"none"}
      rounded={"none"}
      color={"white"}
      size="lg"
      width={"full"}
      outline={"none"}
      backgroundColor={"#0e465f"}
      px={6}
      py={8}
      letterSpacing={"0.05rem"}
      _focus={{ border: "none", outline: "none" }}
      focusBorderColor="transparent"
      _active={{ border: "none", outline: "none" }}
      _placeholder={{ color: "white", fontSize: "md" }}
      {...props}
    />
  );
};

interface LabelLayoutProps {
  label: string;
  children?: React.ReactNode;
}

const NewFilter = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterType>({
    address: null,
    propertyType: [],
    propertyStatus: [],
    propertySize: [],
    broker: null,
    salePriceMin: 0,
    salePriceMax: 1000000,
    pricePersfMin: 0,
    pricePersfMax: 100,
  });
  return (
    <div className="bg-[#013146] p-14 sm:p-20">
      <SectionLayout>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-x-3 gap-y-12">
          {/* main filters */}
          <div className="xl:col-span-3">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-x-3 gap-y-12">
              {/* address */}
              <div className="xl:col-span-2">
                <CustomInput
                  type="text"
                  label="Address"
                  placeholder="Address"
                  value={filter.address || ""}
                  onChange={(e) =>
                    setFilter({ ...filter, address: e.target.value })
                  }
                />
              </div>
              {/* property type */}
              <div className="xl:col-span-1">
                <Select
                  classNamePrefix="select"
                  className="basic-multi-select border-none"
                  options={PropertyType}
                  menuPortalTarget={document.body}
                  styles={customStyles}
                  isMulti
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary: "transparent",
                    },
                  })}
                  placeholder="Property Type"
                  onChange={(e: any) =>
                    setFilter({
                      ...filter,
                      propertyType: e.map((option) => option.value),
                    })
                  }
                />
              </div>
              {/* property status */}
              <div className="xl:col-span-1">
                <Select
                  classNamePrefix="select"
                  className="basic-multi-select border-none"
                  options={PropertyStatus}
                  menuPortalTarget={document.body}
                  styles={customStyles}
                  isMulti
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary: "transparent",
                    },
                  })}
                  placeholder="Property Status"
                  onChange={(e: any) =>
                    setFilter({
                      ...filter,
                      propertyStatus: e.map((option) => option.value),
                    })
                  }
                />
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="gap-10 xl:col-span-1 flex flex-col xl:flex-row xl:justify-end xl:items-center xl:gap-5">
            <button
              className="text-white text-sm py-2 text-start uppercase tracking-widest border-b-2 border-b-white"
              onClick={() => setOpen((prev) => !prev)}
            >
              Less Options
            </button>
            <button className="text-white bg-[#98002e] py-4 px-8 uppercase tracking-widest font-light rounded-tl-[2rem] rounded-br-[2rem]">
              Search
            </button>
          </div>
          {/* extra filters */}
          <div
            className={`xl:col-span-3 duration-500 overflow-hidden origin-top ${
              open ? "h-fit mt-3 pt-12" : "h-0 mt-0 pt-0"
            }`}
          >
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-3 gap-y-12">
              {/* size */}
              <div>
                <Select
                  classNamePrefix="select"
                  className="basic-multi-select border-none"
                  menuPortalTarget={document.body}
                  options={PropertySize}
                  styles={customStyles}
                  isMulti
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary: "transparent",
                    },
                  })}
                  placeholder="Property Size"
                  onChange={(e: any) =>
                    setFilter({
                      ...filter,
                      propertySize: e.map((option) => option.value),
                    })
                  }
                />
              </div>
              {/* broker */}
              <div>
                <Select
                  classNamePrefix="select"
                  className="basic-single border-none"
                  options={Broker}
                  menuPortalTarget={document.body}
                  styles={customStyles}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary: "transparent",
                    },
                  })}
                  placeholder="Broker"
                  onChange={(e: any) =>
                    setFilter({
                      ...filter,
                      broker: e!.value,
                    })
                  }
                />
              </div>
              {/* sale min max */}
              <div className="flex flex-col gap-5">
                <p className="text-white tracking-wide">Sale Price Range</p>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5 items-center">
                    <CustomInput
                      type="number"
                      label="Sale Price Min"
                      placeholder="Sale Price Min"
                      value={filter.salePriceMin}
                      onChange={(e) =>
                        setFilter({
                          ...filter,
                          salePriceMin: +e.target.value,
                        })
                      }
                    />
                    <p className="text-white tracking-wide">to</p>
                    <CustomInput
                      type="number"
                      label="Sale Price Max"
                      placeholder="Sale Price Max"
                      value={filter.salePriceMax}
                      onChange={(e) =>
                        setFilter({
                          ...filter,
                          salePriceMax: +e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="px-2">
                    <RangeSlider
                      aria-label={["min", "max"]}
                      defaultValue={[0, 1000000]}
                      colorScheme="red"
                      value={[filter.salePriceMin, filter.salePriceMax]}
                      onChange={(e) =>
                        setFilter({
                          ...filter,
                          salePriceMin: e[0],
                          salePriceMax: e[1],
                        })
                      }
                    >
                      <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                      </RangeSliderTrack>
                      <RangeSliderThumb index={0} />
                      <RangeSliderThumb index={1} />
                    </RangeSlider>
                  </div>
                </div>
              </div>
              {/* sf min max */}
              <div className="flex flex-col gap-5">
                <p className="text-white tracking-wide">
                  Lease Price Range Per SF
                </p>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5 items-center">
                    <CustomInput
                      type="number"
                      label="Price per SF Min"
                      placeholder="Price per SF Min"
                      value={filter.pricePersfMin}
                      onChange={(e) =>
                        setFilter({
                          ...filter,
                          pricePersfMin: +e.target.value,
                        })
                      }
                    />
                    <p className="text-white tracking-wide">to</p>
                    <CustomInput
                      type="number"
                      label="Price per SF Max"
                      placeholder="Price per SF Max"
                      value={filter.pricePersfMax}
                      onChange={(e) =>
                        setFilter({
                          ...filter,
                          pricePersfMax: +e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="px-2">
                    <RangeSlider
                      aria-label={["min", "max"]}
                      defaultValue={[0, 1000000]}
                      value={[filter.pricePersfMin, filter.pricePersfMax]}
                      colorScheme="red"
                      onChange={(e) =>
                        setFilter({
                          ...filter,
                          pricePersfMin: e[0],
                          pricePersfMax: e[1],
                        })
                      }
                    >
                      <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                      </RangeSliderTrack>
                      <RangeSliderThumb index={0} />
                      <RangeSliderThumb index={1} />
                    </RangeSlider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default NewFilter;

// address
// property type
// property status
// size
// broker
// sale min max
// sf min max
