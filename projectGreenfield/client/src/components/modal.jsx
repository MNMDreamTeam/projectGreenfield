import React from 'react';

/*
  Modal Component -- Style for modal alert window.

  Can refactor to a class if need be. I imagine the title and body (an maybe buttons) will load
  dynamically, depending on which other componenet is needing the alert.

  Here is the base --
*/

const Modal = () => {
  return (
    <div>
      <div class="modal fade" id="modal" tabIndex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitle">Alert Title Here</h5>
              <button type="button" class="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>The alert text will go here......</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;