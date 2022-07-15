import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import { nextTick } from 'vue'
import '@testing-library/jest-dom'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', async () => {
    const msg = 'new message'
    const {emitted} = render(HelloWorld, {
      props: { msg }
    })

    // getByText returns error
    // queryByText returns null
    // findBy... works assyncronously


    // expect(screen.queryByText(msg)).not.toBeInTheDocument()

    // fireEvent.click(
    //   screen.getByRole("show-text")
    // )
  
    // nextTick(() => {
    //   expect(screen.getByText(msg)).toBeInTheDocument()
    // })

    // OR

    // waitFor(() => {
    //   //runs every 50ms for 1000ms, after returns error
    //   expect(screen.getByText(msg)).toBeInTheDocument()
    // })

    // OR

    // expect(await screen.findByText(msg)).toBeInTheDocument()


    var $button = screen.getByRole("button", {name: "Submit"})
    expect($button).toBeDisabled()

    await fireEvent.update(
      screen.getByLabelText("Name"),
      "Hello"
    )
    expect($button).not.toBeDisabled()

    // screen.debug() shows current Dom state

    fireEvent.click($button)
    expect(
      // @ts-ignore
      emitted().submit[0][0]).toEqual("Hello")
    
    
  })
})