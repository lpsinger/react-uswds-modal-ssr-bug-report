import { useRef } from 'react';
import {
  Modal,
  ModalFooter,
  ModalHeading,
  ModalRef,
  ModalToggleButton
} from "@trussworks/react-uswds";

export default function Index() {
  const modalRef = useRef<ModalRef>(null);
  return <>
    <Modal id="test-modal" ref={modalRef}>
      <ModalHeading>
        <h1>Test Modal</h1>
      </ModalHeading>
      <div className="usa-prose">
        Test modal text...
      </div>
      <ModalFooter>
        <ModalToggleButton modalRef={modalRef} closer>
          Close
        </ModalToggleButton>
      </ModalFooter>
    </Modal>
    <ModalToggleButton modalRef={modalRef} opener>
      Open
    </ModalToggleButton>
  </>;
}
