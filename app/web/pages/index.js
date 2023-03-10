import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Swal from "sweetalert2";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Script from "next/script";

const Container = styled.div`
  border: none;
  width: 100%;
  height: 100vh;
`;

const TopArea = styled.div`
  border: 2px solid white;
  border-left: none;
  border-top: none;
  border-radius: 10px;
  width: 90%;
  height: 15vh;
  margin: 0 auto;
  margin-top: 10px;
  background-color: rgba(91, 135, 214, 0.8);
`;
const InputBookTitle = styled.input`
  width: 95%;
  height: 90%;
  margin: 0 auto;
  font-size: 2.5vh;
`;

const ContentArea = styled.div`
  width: 80%;
  height: 30vh;
  margin: 0 auto;
  margin-top: 5vh;
`;

const BottomArea = styled.div`
  width: 80%;
  height: 30vh;
  margin: 0 auto;
  margin-top: 10px;
`;

const OptionAreas = styled.div`
  width: 100%;
  height: 30%;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 15px;
  display: flex;
`;

const SideOptionsAreas = styled.div`
  width: 20%;
  height: 100%;
  border-left: 1px solid black;
  font-size: 2.5vh;
`;

const MoreOptionOne = styled.div`
  width: 80%;
  height: 100%;
`;
const MoreOptionTwo = styled.div`
  width: 80%;
  height: 100%;
`;
const OptionsInput = styled.input`
  width: 94%;
  height: 90%;
  border-radius: 15px;
  border: none;

  font-size: 2.5vh;
`;

const Text = styled.div`
  font-size: 2.5vh;
  line-height: 2;
  padding-left: 6px;
`;

const ButtonArea = styled.div`
  width: 95%;
  height: 20%;
  margin: 0 auto;
  margin-top: 15px;
  text-align: center;
`;

const StartBtn = styled.button`
  width: 90%;
  height: 100%;
  background-color: rgba(91, 135, 214, 0.8);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 2.5vh;
`;
//91 135 214
const ResultArea = styled.textarea`
  width: 97%;
  height: 100%;
  background-color: white;
  font-size: 2vh;
  padding: 1.5%;
  font-weight: bold;
  margin-top: 20px;
  color: black;
`;

const ADArea = styled.div``;
const ADIns = styled.ins``;
export default function Home() {
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>;
  const [inputText, setInputText] = useState("");
  const [inputOptionOneText, setInputOptionOneText] = useState("");
  const [inputOptionTwoText, setInputOptionTwoText] = useState("");
  const [resultText, setResultText] = useState("");
  const [resultAreaPlaceHolder, setResultAreaPlaceHolder] =
    useState("?????? ????????? ????????????????.?");
  async function getReportAboutBook() {
    var optionValidation = "";
    var optionOne = "";
    var optionTwo = "";
    if (inputText != "") {
      if (inputOptionOneText == "" && inputOptionTwoText == "") {
        optionValidation = "?????? ????????? ???????????? ????????? ?????????";
      } else if (inputOptionOneText == "" && inputOptionTwoText != "") {
        optionValidation = `${inputOptionTwoText} ???????????? ???????????? ????????`;
        optionTwo = inputOptionTwoText + "?????? ?????????";
      } else if (inputOptionOneText != "" && inputOptionTwoText == "") {
        optionValidation = `${inputOptionOneText} ??? ???????????? ???????????? ????????`;
        optionOne = inputOptionOneText + "??? ?????????";
      } else if (inputOptionOneText != "" && inputOptionTwoText != "") {
        optionValidation = `${inputOptionOneText} ??? ?????????\n${inputOptionTwoText}???????????? ???????????? ????????`;
        optionOne = inputOptionOneText + "??? ?????????";
        optionTwo = inputOptionTwoText + "?????? ?????????";
      }

      Swal.fire({
        title: `${inputText} ?????? ????????? ??????????????`,
        text: `${optionValidation}`,
        icon: `warning`,

        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "????????? !",
        cancelButtonText: "????????? !",

        reverseButtons: true,
      }).then(async (res) => {
        if (res.isConfirmed) {
          Swal.fire("????????? !", "????????? ????????????~~~", "success");
          setResultAreaPlaceHolder(
            "?????? ???????????????...!! 1???????????? ???????????? !!"
          );
          const data = {
            text: `${inputText} ?????? ?????? ${optionOne} ${optionTwo} ??? ???????????? ??????????????????`,
            optionTwo: `${optionTwo}`,
          };

          axios
            .post("https://back.jenfra.shop/api/openai/getReport", data, {
              headers: {
                "Content-Type": `application/json`,
              },
            })
            .then((res) => {
              console.log(res.data);
              setResultText(res.data);
            });
        }
      });
    } else {
      Swal.fire("???????????? ????????? ??? ????????? ?????????!");
      return;
    }
  }

  return (
    <Container>
      <ADArea style={{ textAlign: "center" }}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1919598055512436"
          crossorigin="anonymous"
        ></Script>

        <ins
          class="adsbygoogle"
          style={{ display: "inline-block", width: "320px", height: "100px" }}
          data-ad-client="ca-pub-1919598055512436"
          data-ad-slot="2044520891"
        ></ins>
        <Script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</Script>

        <Head>
          <Script
            defer
            src="https://cdn.swygbro.com/public/widget/swyg-widget.js"
          ></Script>
          <title>?????? ?????????!_easybookreport</title>
          <meta name="theme-color" content="#E47B00" />
          <meta name="description" content="AI??? ?????? ??????????????? ??? ?????? !" />
          <meta name="keywords" content="?????????, ai, openai, chatgpt, ???" />
          <meta property="og:site_name" content="easybookreport_1?????? ?????????" />
          <meta property="og:title" content="easybookreport_1?????? ?????????" />
          <meta
            property="og:description"
            content="AI??? ?????? ??????????????? ??? ?????? !"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://easybookreport.swygbro.com"
          />
          <meta property="og:image" content="/images/subImg1.png" />
          <meta name="twitter:title" content="easybookreport_1?????? ?????????" />
          <link rel="apple-touch-icon" href="/images/subImg1.png" />
          <link rel="shortcut icon" href="/images/subImg4.png" />
        </Head>
      </ADArea>

      <TopArea>
        <InputBookTitle
          type="text"
          placeholder="???????????? ????????????? ??? ????????? ????????? ! ????????? !"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </TopArea>

      <ContentArea>
        <OptionAreas>
          <MoreOptionOne>
            <OptionsInput
              type="text"
              placeholder="???????????? 10??? ?????? ?????? 20??? ?????????"
              value={inputOptionOneText}
              onChange={(e) => setInputOptionOneText(e.target.value)}
            />
          </MoreOptionOne>
          <SideOptionsAreas>
            <Text>???</Text> <Text>?????????</Text>
          </SideOptionsAreas>
        </OptionAreas>

        <OptionAreas>
          <MoreOptionTwo>
            <OptionsInput
              type="text"
              placeholder="500~3000 ????????????! (3000??? ?????? !)"
              value={inputOptionTwoText}
              onChange={(e) =>
                setInputOptionTwoText(e.target.value.replace(/[^0-9]/g, ""))
              }
            />
          </MoreOptionTwo>
          <SideOptionsAreas>
            <Text>??????</Text>
            <Text>?????????</Text>
          </SideOptionsAreas>
        </OptionAreas>

        <ButtonArea>
          <StartBtn
            onClick={() => {
              getReportAboutBook();
            }}
          >
            ???????????? ????????? ! CLICK !!
          </StartBtn>
        </ButtonArea>
      </ContentArea>

      <BottomArea>
        <ResultArea
          placeholder={resultAreaPlaceHolder}
          value={resultText}
          readOnly
        ></ResultArea>
      </BottomArea>
    </Container>
  );
}
