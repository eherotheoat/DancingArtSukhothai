import { Fragment, useState } from "react";
import Swal, { SweetAlertIcon } from "sweetalert2/src/sweetalert2.js";
import withReactContent from "sweetalert2-react-content";
import { Button, Modal, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Content from "../components/layouts/Content";
import LoadingPage from "../components/Loading/LoadingPage";

export default function TestPage() {
  const MySwal = withReactContent(Swal);
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const switchingLanguage = (lang: string) => {
    if (i18n.language === "en") {
      i18n.changeLanguage("th");
    } else {
      i18n.changeLanguage("en");
    }
  };
  const onBtnClick = (
    e: React.MouseEvent,
    color: string,
    icon: SweetAlertIcon
  ) => {
    e.preventDefault();
    MySwal.fire({
      title: "การชำระเงินสำเร็จ",
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
      customClass: {
        confirmButton: [color],
        cancelButton: ["swal2-styled-outline", color],
      },
      showConfirmButton: true,
      showCancelButton: true,
      reverseButtons: true,
      icon: icon,
    });
  };

  return (
    <Content title="ผู้ดูแลระบบ">
      <LoadingPage loading={false} />
      <Fragment>
        <h1>{t("title")}</h1>
        <Button variant="primary" onClick={() => switchingLanguage("en")}>
          เปลี่ยนภาษา
        </Button>{" "}
        <Button
          variant="primary"
          onClick={(e: any) => onBtnClick(e, "primary", "success")}
        >
          Primary
        </Button>{" "}
        <Button
          variant="success"
          onClick={(e: any) => onBtnClick(e, "success", "success")}
        >
          Success
        </Button>{" "}
        <Button
          variant="warning"
          onClick={(e: any) => onBtnClick(e, "warning", "warning")}
        >
          Warning
        </Button>{" "}
        <Button
          variant="danger"
          onClick={(e: any) => onBtnClick(e, "danger", "error")}
        >
          Danger
        </Button>{" "}
        <Button
          variant="info"
          onClick={(e: any) => onBtnClick(e, "info", "info")}
        >
          Info
        </Button>{" "}
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Form className="mt-3">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Fragment>
    </Content>
  );
}
