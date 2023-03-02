import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Swal from "sweetalert2";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";

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

export default function Home() {
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>;
  const [inputText, setInputText] = useState("");
  const [inputOptionOneText, setInputOptionOneText] = useState("");
  const [inputOptionTwoText, setInputOptionTwoText] = useState("");
  const [resultText, setResultText] = useState("");
  const [resultAreaPlaceHolder, setResultAreaPlaceHolder] =
    useState("먼저 버튼을 클릭해줄래?.?");
  async function getReportAboutBook() {
    var optionValidation = "";
    var optionOne = "";
    var optionTwo = "";
    if (inputText != "") {
      if (inputOptionOneText == "" && inputOptionTwoText == "") {
        optionValidation = "아무 옵션도 추가하지 않은게 맞지???";
      } else if (inputOptionOneText == "" && inputOptionTwoText != "") {
        optionValidation = `${inputOptionTwoText} 글자로만 읽어주면 될까??`;
        optionTwo = inputOptionTwoText + "글자 이내로";
      } else if (inputOptionOneText != "" && inputOptionTwoText == "") {
        optionValidation = `${inputOptionOneText} 의 말투로만 읽어주면 될까??`;
        optionOne = inputOptionOneText + "의 말투로";
      } else if (inputOptionOneText != "" && inputOptionTwoText != "") {
        optionValidation = `${inputOptionOneText} 의 말투로\n${inputOptionTwoText}글자내로 읽어주면 될까??`;
        optionOne = inputOptionOneText + "의 말투로";
        optionTwo = inputOptionTwoText + "글자 이내로";
      }

      Swal.fire({
        title: `${inputText} 책을 읽어서 알려줄까??`,
        text: `${optionValidation}`,
        icon: `warning`,

        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "읽어줘 !",
        cancelButtonText: "잠깐만 !",

        reverseButtons: true,
      }).then(async (res) => {
        if (res.isConfirmed) {
          Swal.fire("알겠어 !", "조금만 기다려줘~~~", "success");
          setResultAreaPlaceHolder(
            "책을 읽는중이야...!! 1분정도만 기다려줘 !!"
          );
          const data = {
            text: `${inputText} 라는 책을 ${optionOne} ${optionTwo} 꼭 한국어로 요약해주세요`,
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
      Swal.fire("읽어주길 원하는 책 이름을 알려줘!");
      return;
    }
  }

  return (
    <Container>
      <Head>
        <script
          defer
          src="https://cdn.swygbro.com/public/widget/swyg-widget.js"
        ></script>
        <title>하루 책한권!_easybookreport</title>
        <meta name="theme-color" content="#E47B00" />
        <meta name="description" content="AI가 뚝딱 요약해주는 책 한권 !" />
        <meta name="keywords" content="독후감, ai, openai, chatgpt, 책" />
        <meta property="og:site_name" content="easybookreport_1분에 책한권" />
        <meta property="og:title" content="easybookreport_1분에 책한권" />
        <meta
          property="og:description"
          content="AI가 뚝딱 요약해주는 책 한권 !"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://easybookreport.swygbro.com" />
        <meta property="og:image" content="/images/subImg1.png" />
        <meta name="twitter:title" content="easybookreport_1분에 책한권" />
        <link rel="apple-touch-icon" href="/images/subImg1.png" />
        <link rel="shortcut icon" href="/images/subImg4.png" />
      </Head>

      <div style={{ textAlign: "center", border: "1px solid black" }}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1919598055512436"
          crossorigin="anonymous"
        ></script>

        <ins
          class="adsbygoogle"
          style={{ display: "inline-block", width: "300px", height: "250px" }}
          data-ad-client="ca-pub-1919598055512436"
          data-ad-slot="9210283486"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({})</script>
      </div>

      <TopArea>
        <InputBookTitle
          type="text"
          placeholder="어떤책을 읽어줄까? 책 제목을 알려줘 ! 터치해 !"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </TopArea>

      <ContentArea>
        <OptionAreas>
          <MoreOptionOne>
            <OptionsInput
              type="text"
              placeholder="개구쟁이 10대 소녀 또는 20대 청소년"
              value={inputOptionOneText}
              onChange={(e) => setInputOptionOneText(e.target.value)}
            />
          </MoreOptionOne>
          <SideOptionsAreas>
            <Text>의</Text> <Text>말투로</Text>
          </SideOptionsAreas>
        </OptionAreas>

        <OptionAreas>
          <MoreOptionTwo>
            <OptionsInput
              type="text"
              placeholder="500~3000 마음대로! (3000자 추천 !)"
              value={inputOptionTwoText}
              onChange={(e) =>
                setInputOptionTwoText(e.target.value.replace(/[^0-9]/g, ""))
              }
            />
          </MoreOptionTwo>
          <SideOptionsAreas>
            <Text>글자</Text>
            <Text>이내로</Text>
          </SideOptionsAreas>
        </OptionAreas>

        <ButtonArea>
          <StartBtn
            onClick={() => {
              getReportAboutBook();
            }}
          >
            읽고나서 알려줘 ! CLICK !!
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
