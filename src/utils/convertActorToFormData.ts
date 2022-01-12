import { actorCreateDTO } from "../models/actor/actor.model";

export function converActorToFormData(actor: actorCreateDTO): FormData {
    const formData = new FormData();

    formData.append("name", actor.name);
    if (actor.biography) { formData.append("biography", actor.biography); }
    if (actor.dateOfBirth) {
        formData.append("dateOfBirth", formateDate(actor.dateOfBirth));
    }
    if (actor.picture) {
        formData.append("picture", actor.picture)
    }

    if (actor.pictureURL) {
        formData.append("pictureURL", actor.pictureURL)
    }

    return formData;
}
function formateDate(date: Date) {
    date = new Date(date);
    const format = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
    const [
        { value: month }, ,
        { value: day }, ,
        { value: year }
    ] = format.formatToParts(date);
    return `${year}-${month}-${day}`;
}
