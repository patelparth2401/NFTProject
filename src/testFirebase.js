import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export async function testFirestore() {
  try {
    await setDoc(doc(db, "test", "example"), {
      message: "Firebase is working!",
      timestamp: Date.now(),
    });
    console.log("Test data written to Firestore");
  } catch (error) {
    console.error("Error:", error);
  }
}

// testFirestore();
