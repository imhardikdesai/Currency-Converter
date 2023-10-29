import { React, useState, useRef, useEffect } from "react";
import {
  Stack,
  InputGroup,
  Input,
  InputLeftElement,
  Select,
  Box,
  Text,
  HStack,
  WrapItem,
  Button,
} from "@chakra-ui/react";
import "./form.css";
import countryData from "./../../json/countryData.js";
import { FcMoneyTransfer } from "react-icons/fc";
import { BiReset } from "react-icons/bi";
const Form = () => {
  const ref = useRef(null);
  const [countryRate, setCountryRate] = useState(null);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(null);
  const [fromCountry, setFromCountry] = useState("USD");
  const [toCountry, setToCountry] = useState("");
  const [symbol, setSymbol] = useState(null);

  const resetHandler = () => {
    setAmount(null);
    setPrice(0);
    setFromCountry("USD");
    setToCountry("");
    setSymbol(null);
  };
  const setAmountHandler = (e) => {
    if (e.target.value > 99999999) {
      alert("Number you have entered is too big");
      ref.current.click();
    }
    setAmount(e.target.value);
  };

  const setFromCountryHandler = (e) => {
    let x = countryData.filter((a) => {
      if (a.name === e.target.value) {
        return a;
      }
      return false;
    });
    setFromCountry(x[0].abbreviation);
  };

  const setToCountryHandler = (e) => {
    let x = countryData.filter((a) => {
      if (a.name === e.target.value) {
        setSymbol(a.symbol);
        return a;
      }
      return false;
    });
    setToCountry(x[0].abbreviation);
  };
  const convertPrice = () => {
    setPrice(
      parseFloat((amount * countryRate[toCountry]) / countryRate[fromCountry])
    );
  };

  useEffect(() => {
    const fetchPrice = async () => {
      // const baseURL = `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/latest/${fromCountry}`;
      const baseURL = `https://v6.exchangerate-api.com/v6/0a260683f8f2acca05ac3018/latest/${fromCountry}`;
      const data = await fetch(baseURL);
      const priceData = await data.json();
      setCountryRate(priceData.conversion_rates);
    };
    fetchPrice();
  }, [fromCountry]);
  return (
    <>
      <div className="form-body">
        <Box as="form">
          <Stack spacing={4} py="1.5">
            <InputGroup alignItems={"center"}>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2rem"
                children={<FcMoneyTransfer />}
              />
              <Input
                type={"number"}
                autoFocus={true}
                onChange={setAmountHandler}
                placeholder="Enter amount"
                variant={"filled"}
              />
              <Button
                type="reset"
                px={"8px"}
                py={"12px"}
                fontSize={"1.3rem"}
                ml={"1"}
                ref={ref}
                onClick={resetHandler}
                colorScheme="teal"
                size="md"
              >
                <BiReset />
              </Button>
            </InputGroup>

            <Text mb="5px">From </Text>
            <InputGroup size="sm">
              <Select
                disabled={amount === (0 || null || "")}
                onChange={setFromCountryHandler}
                variant={"filled"}
                placeholder="Select country"
                size="md"
                rounded={"md"}
              >
                {countryData.map((country, index) => {
                  return (
                    <option key={index} value={country.name}>
                      {country.name}
                    </option>
                  );
                })}
              </Select>
            </InputGroup>

            <Text mb="5px">To </Text>
            <InputGroup size="sm">
              <Select
                disabled={amount === (0 || null || "")}
                onChange={setToCountryHandler}
                variant={"filled"}
                placeholder="Select country"
                size="md"
                rounded={"md"}
              >
                {countryData.map((country, index) => {
                  return (
                    <option key={index} value={country.name}>
                      {country.name}
                    </option>
                  );
                })}
              </Select>
            </InputGroup>
          </Stack>
        </Box>

        <div className="bottom">
          <HStack mt={"10"} justifyContent="center">
            <Text fontSize="2xl" fontWeight="600">
              Exchange Rate <br />
              <span
                style={{
                  textAlign: "center",
                  fontWeight: "900",
                  fontSize: "3.5rem",
                }}
              >
                {price
                  ? parseInt(price.toFixed(2)).toLocaleString("en-US")
                  : "0.00"}{" "}
                {price ? (
                  <span style={{ color: "#3182CE" }}>{symbol}</span>
                ) : null}
              </span>
            </Text>
          </HStack>
          <WrapItem>
            <Button
              onClick={convertPrice}
              px={"20"}
              my={"5"}
              colorScheme="blue"
            >
              Convert
            </Button>
          </WrapItem>
        </div>
      </div>
    </>
  );
};

export default Form;
