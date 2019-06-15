import React, { HTMLProps } from "react";
import classNames from "classnames";
import { Transition } from "react-transition-group";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import * as actions from "../../store/ui/actions";

import Card from "../Card/Card";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

import styles from "./Modal.module.scss";
import { modalContentType } from "../../store/ui/types";

interface ModalRedux {
  modalContent?: modalContentType;
  modalState: boolean;
  setModalContent: typeof actions.setModalContent;
  setModalState: typeof actions.setModalState;
}

interface IModalProps extends HTMLProps<HTMLDivElement>, ModalRedux {}

const Modal: React.FC<IModalProps> = ({
  children,
  modalContent,
  modalState,
  setModalContent,
  setModalState,
  ...props
}) => {
  const handleModalClose = () => {
    setModalState(false);
  };
  return (
    <div {...props}>
      <Transition in={modalState} timeout={300} mountOnEnter unmountOnExit>
        {state => (
          <div className={classNames(styles.modal, styles[state])}>
            <Card>
              <Button
                btnRole="link"
                className={styles.closeBtn}
                onClick={handleModalClose}
              >
                X
              </Button>
              {modalContent && (
                <div className={styles.content}>
                  <Heading>{modalContent.title}</Heading>
                  <Heading type="subtitle">{modalContent.description}</Heading>
                </div>
              )}
            </Card>
          </div>
        )}
      </Transition>
      <Transition in={modalState} timeout={600}>
        {state => (
          <div className={classNames(styles.overlay, styles[state])}>
            {children}
          </div>
        )}
      </Transition>
    </div>
  );
};

const mapStateToProps = ({ ui }: ApplicationState) => ({
  modalState: ui.modalState,
  modalContent: ui.modalContent
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setModalContent: (modalContent?: modalContentType) =>
    dispatch(actions.setModalContent(modalContent)),
  setModalState: (modalState: boolean) =>
    dispatch(actions.setModalState(modalState))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
