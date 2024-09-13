// sum.test.ts
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import AppBar from '../src/components/AppBar.vue'; 
import { checkPrime } from 'crypto';

const appBarName = 'Dashboard'
const appBarNameReject = 123
const wrapper = mount(AppBar,{
    props:{
        AppBarName:appBarName
    }
});

describe("AppBar tests", () => {
    it("Cek Sidebar Show on First Loaded?", () => {
        // Access the drawer ref
        expect(wrapper.vm.drawer).toBe(true);
  });
  it("Cek Sidebar Hide if Click?", async () => {
    // Access button
    const buttonSidebar = wrapper.find('[data-type="btnSideBarTest"]');
    expect(buttonSidebar.exists()).toBe(true);
    await buttonSidebar.trigger('click');
    expect(wrapper.vm.drawer).toBe(false);
  });
  it("Cek Sidebar Show if Click (modehide)?", async () => {
    // Access button
    const buttonSidebar = wrapper.find('[data-type="btnSideBarTest"]');
    expect(buttonSidebar.exists()).toBe(true);
    await buttonSidebar.trigger('click');
    expect(wrapper.vm.drawer).toBe(true);
  });
  it("Cek Appbar Name Not Empty", async () => {
    expect(wrapper.text()).toContain(appBarName)
  });
  it("Cek Appbar Name Not Empty", async () => {
    expect(wrapper.text()).toContain(appBarName)
  });
  it("Cek Appbar Name Only String", async () => {
    expect(typeof wrapper.props('AppBarName')).toBe('string')
  });
  it("Cek Appbar Name Reject Not String", async () => {
    expect(typeof wrapper.props('AppBarName')).not.toBe('integer')
    expect(typeof wrapper.props('AppBarName')).not.toBe('float')
  });
  
});
