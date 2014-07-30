import styleBody from 'ghost/mixins/style-body';
import loadingIndicator from 'ghost/mixins/loading-indicator';

var SignoutRoute = Ember.Route.extend(SimpleAuth.AuthenticatedRouteMixin, styleBody, loadingIndicator, {
    classNames: ['ghost-signout'],

    afterModel: function (model, transition) {
        this.notifications.clear();
        if (Ember.canInvoke(transition, 'send')) {
            transition.send('invalidateSession');
            transition.abort();
            this.transitionTo('signin');
        } else {
            this.send('invalidateSession');
            this.transitionTo('signin');
        }
    }
});

export default SignoutRoute;
