//  If the arguments are strings they are assumed to be keys, otherwise they are Scene objects
//  You can only swap the positions of Active (rendering / updating) Scenes. If a Scene is not active it cannot be moved.

var MoveDown = function (scene)
{
    var index = (typeof scene === 'string') ? this.getActiveSceneIndexByKey(scene) : this.getActiveSceneIndex(scene);

    if (index > 0)
    {
        var sceneB = this.getSceneAt(index - 1);

        if (sceneB)
        {
            this.swapPosition(scene, sceneB);
        }
    }
};

module.exports = MoveDown;
