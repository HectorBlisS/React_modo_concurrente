
export function fetchCharacter(id){
    if(!id) return suspensify(fetch(`https://rickandmortyapi.com/api/character/`).then(r=>r.json()))
    return suspensify(fetch(`https://rickandmortyapi.com/api/character/${id}`).then(r=>r.json()))
  }
  
  export default function suspensify(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
      response => {
        status = "success";
        result = response;
      },
      error => {
        status = "error";
        result = error;
      }
    );
  
    return {
      read() {
          console.log(status)
        if (status === "pending") {
          throw suspender;
        }
        if (status === "error") {
          throw result;
        }
        if (status === "success") {
          return result;
        }
      }
    };
  }