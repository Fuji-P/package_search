import React, { useState } from 'react'

const DeleteConfirm = ({handleDelete,onOpenDialog,onCloseDialog}) => {

  return (
    <div>
<i class='btn fa fa-trash' style={{color:'#555553' ,outline:"none"}} data-toggle="modal" data-target="#exampleModalCenter" onClick={onOpenDialog}></i>


<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" data-backdrop="false" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">

      <div className="modal-body">
        Are you sure you want to delete?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal" nClick={onCloseDialog}>Cancel</button>
        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleDelete}>Yes</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default DeleteConfirm
