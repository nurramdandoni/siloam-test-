import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import SidebarMenu from '../src/components/SidebarMenu.vue';

const wrapper = mount(SidebarMenu);
describe("SidebarMenu tests", () => {
    it("Cek Sidebar Not Show", () => {
        // Access the drawer ref
        expect(wrapper.vm.drawer).toBe(false);
  });
    it("Cek Sidebar list Data Not Empty", () => {
        // Access the drawer ref
        let textTest: string = "sample"
        let linkTest: string = "sample"
        let iconTest: string = "sample"
        const wrapper = mount(SidebarMenu,{
            props: {
                drawer: false,
                menuItems: [{ text: textTest, link: linkTest, icon: iconTest }]
            }
        });
        expect(Array.isArray(wrapper.props('menuItems'))).toBe(true);
        expect(wrapper.props('menuItems').length).toBeGreaterThan(0);
  });
});