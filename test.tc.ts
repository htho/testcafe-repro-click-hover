import { fixture, Selector } from "testcafe";

fixture("repro-testcafe-click-hover")
	.page("http://localhost:3000/")

const bg = Selector("#bg");
const fg = Selector("#fg");
const ol = Selector("#ol");

test("click hides but does not hover", async (t) => {
    await t.expect(bg.hasClass("hovered")).notOk();
    await t.expect(fg.hasClass("hovered")).notOk();
    await t.expect(ol.hasClass("hidden")).notOk();
    await t.click(Selector("#ol"));
    await t.expect(bg.hasClass("hovered")).notOk();
    await t.expect(fg.hasClass("hovered")).notOk();
    await t.expect(ol.hasClass("hidden")).ok();
});