const BASE_URL = "https://pmftci.com/college/view-subject-lessons"

const SUBJECT_IDS = [141458, 141459, 141460, 141461, 141462, 141463]

const SCHEDS = [
    "08:00:00",
    "09:00:00",
    "10:00:00",
    "11:00:00",
    "14:00:00",
    "15:00:00"
]

for (let i = 0; i < SUBJECT_IDS.length; i++) {
    clickAtTime(`a[href="${BASE_URL}/${SUBJECT_IDS[i]}"]`, SCHEDS[i])
}