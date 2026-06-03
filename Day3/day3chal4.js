const studentProfile = {
  name: "MONICA",
  course: "BCA",
  skills: ["JS", "React"]
};

const { name: sName, course: sCourse } = studentProfile;

console.log(`Student ${sName} is enrolled in ${sCourse}`);

const updatedProfile = {
  ...studentProfile,
  year: "2nd Year"
};

console.log(updatedProfile);
