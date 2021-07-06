import { setFlag } from '../../package/flag'

describe('issue', function () {
    beforeEach(() => {
        setFlag(true);
        cy.log("Flag was set");
    })

    it('does not work - but, why ?', function () {
        cy.checkFlagIsSet();
    })
})